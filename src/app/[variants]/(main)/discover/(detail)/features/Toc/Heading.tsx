'use client';

import { Icon } from '@lobehub/ui';
import { createStyles, useTheme } from 'antd-style';
import { kebabCase } from 'lodash-es';
import { Heading2, Heading3, Heading4, Heading5 } from 'lucide-react';
import Link from 'next/link';
import { Children, ComponentProps, FC, ReactNode, isValidElement, useEffect, useMemo } from 'react';

import { useToc } from './useToc';

const extractTextChildren = (children: ReactNode) => {
  let text = '';

  Children.forEach(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      text += child;
    } else if (isValidElement(child) && (child as any).props.children) {
      text += extractTextChildren((child as any).props.children);
    }
  });

  return text;
};

const HeadingIcon: any = {
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
};

const useStyles = createStyles(({ css, cx, token }) => {
  const anchor = cx(css`
    display: none;
    margin-inline-start: 0.5rem;
    color: ${token.colorTextDescription} !important;
  `);
  return {
    anchor,
    container: css`
      &:hover {
        .${anchor} {
          display: inline;
        }
      }
    `,
  };
});

const createHeading = (Tag: `h${1 | 2 | 3 | 4 | 5 | 6}`) => {
  const Heading: FC<ComponentProps<'h2'>> = ({ children, className, style, ...props }) => {
    const { setToc, setFinished } = useToc();
    const { cx, styles } = useStyles();
    const text = useMemo(() => extractTextChildren(children), [children]);
    const id = kebabCase(text);
    const theme = useTheme();

    useEffect(() => {
      if (!setToc) return;
      if (Tag === 'h2' || Tag === 'h3') {
        setToc?.((prev = []) => [
          ...prev,
          {
            href: `#${id}`,
            level: Tag === 'h2' ? 2 : 3,
            title: text,
          },
        ]);
      }
      setFinished();
    }, [id]);

    if (Tag === 'h1')
      return (
        <Tag style={{ color: theme.colorText, ...style }} {...props} id={id}>
          {children}
        </Tag>
      );

    return (
      <Tag
        className={cx(styles.container, className)}
        style={{ color: theme.colorText, ...style }}
        {...props}
        id={id}
      >
        {children}
        <Link
          aria-label="Permalink for this section"
          className={styles.anchor}
          href={`#${id}`}
          style={{ scrollMarginTop: 96 }}
        >
          <Icon icon={HeadingIcon[Tag]} />
        </Link>
      </Tag>
    );
  };

  return Heading;
};

export const H1 = createHeading('h1');
export const H2 = createHeading('h2');
export const H3 = createHeading('h3');
export const H4 = createHeading('h4');
export const H5 = createHeading('h5');
