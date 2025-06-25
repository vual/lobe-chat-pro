'use client';

import { ActionIcon, Button, Input, SortableList } from '@lobehub/ui';
import { Empty, Space } from 'antd';
import { createStyles } from 'antd-style';
import { PlusIcon, Trash } from 'lucide-react';
import { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';
import useMergeState from 'use-merge-value';

import { useStore } from '../store';
import { selectors } from '../store/selectors';

const useStyles = createStyles(({ css, token }) => ({
  empty: css`
    margin-block: 24px;
    margin-inline: 0;
  `,
  questionItemContainer: css`
    padding-block: 8px;
    padding-inline-end: 8px;
  `,
  questionItemContent: css`
    flex: 1;
  `,
  questionsList: css`
    width: 100%;
    margin-block-start: 16px;
  `,
  repeatError: css`
    margin: 0;
    color: ${token.colorErrorText};
  `,
}));

interface QuestionItem {
  content: string;
  id: string | number;
}

const OpeningQuestions = memo(() => {
  const { t } = useTranslation('setting');
  const { styles } = useStyles();
  const [questionInput, setQuestionInput] = useState('');

  const openingQuestions = useStore(selectors.openingQuestions);
  const updateConfig = useStore((s) => s.setAgentConfig);

  // 乐观更新，不然会抖
  const [questions, setQuestions] = useMergeState(openingQuestions, {
    onChange: (questions: string[]) => updateConfig({ openingQuestions: questions }),
    value: openingQuestions,
  });

  const items: QuestionItem[] = useMemo(() => {
    return questions.map((item, index) => ({
      content: item,
      id: item || index,
    }));
  }, [questions]);

  const addQuestion = useCallback(() => {
    if (!questionInput.trim()) return;

    setQuestions([...openingQuestions, questionInput.trim()]);
    setQuestionInput('');
  }, [openingQuestions, questionInput, setQuestions]);

  const removeQuestion = useCallback(
    (content: string) => {
      const newQuestions = [...openingQuestions];
      const index = newQuestions.indexOf(content);
      newQuestions.splice(index, 1);
      setQuestions(newQuestions);
    },
    [openingQuestions, setQuestions],
  );

  // 处理拖拽排序后的逻辑
  const handleSortEnd = useCallback(
    (items: QuestionItem[]) => {
      setQuestions(items.map((item) => item.content));
    },
    [setQuestions],
  );

  const isRepeat = openingQuestions.includes(questionInput.trim());

  return (
    <Flexbox gap={8}>
      <Flexbox gap={4}>
        <Space.Compact>
          <Input
            onChange={(e) => setQuestionInput(e.target.value)}
            onPressEnter={addQuestion}
            placeholder={t('settingOpening.openingQuestions.placeholder')}
            value={questionInput}
          />
          <Button
            // don't allow repeat
            disabled={openingQuestions.includes(questionInput.trim())}
            icon={PlusIcon}
            onClick={addQuestion}
          />
        </Space.Compact>

        {isRepeat && (
          <p className={styles.repeatError}>{t('settingOpening.openingQuestions.repeat')}</p>
        )}
      </Flexbox>

      <div className={styles.questionsList}>
        {openingQuestions.length > 0 ? (
          <SortableList
            items={items}
            onChange={handleSortEnd}
            renderItem={(item) => (
              <SortableList.Item
                className={styles.questionItemContainer}
                id={item.id}
                variant={'filled'}
              >
                <SortableList.DragHandle />
                <div className={styles.questionItemContent}>{item.content}</div>
                <ActionIcon
                  icon={Trash}
                  onClick={() => removeQuestion(item.content)}
                  size={'small'}
                />
              </SortableList.Item>
            )}
          />
        ) : (
          <Empty
            className={styles.empty}
            description={t('settingOpening.openingQuestions.empty')}
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        )}
      </div>
    </Flexbox>
  );
});

export default OpeningQuestions;
