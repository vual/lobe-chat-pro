import { TextArea as LobeTextArea, TextAreaProps as Props } from '@lobehub/ui';
import { TextAreaRef } from 'antd/es/input/TextArea';
import { memo, useRef, useState } from 'react';

interface TextAreaProps extends Omit<Props, 'onChange'> {
  onChange?: (value: string) => void;
}

const TextArea = memo<TextAreaProps>(({ onChange, value: defaultValue, ...props }) => {
  const ref = useRef<TextAreaRef>(null);
  const isChineseInput = useRef(false);

  const [value, setValue] = useState(defaultValue as string);

  return (
    <LobeTextArea
      onBlur={() => {
        onChange?.(value);
      }}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      onCompositionEnd={() => {
        isChineseInput.current = false;
      }}
      onCompositionStart={() => {
        isChineseInput.current = true;
      }}
      onPressEnter={() => {
        if (isChineseInput.current) return;
        onChange?.(value);
      }}
      ref={ref}
      {...props}
      value={value}
    />
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
