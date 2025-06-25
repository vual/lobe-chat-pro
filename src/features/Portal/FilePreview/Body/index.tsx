import { Icon, Markdown, Segmented } from '@lobehub/ui';
import { BoltIcon, FileIcon } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import Loading from '@/components/Loading/CircleLoading';
import FileViewer from '@/features/FileViewer';
import { useChatStore } from '@/store/chat';
import { chatPortalSelectors } from '@/store/chat/selectors';
import { useFileStore } from '@/store/file';

enum FilePreviewTab {
  Chunk = 'chunk',
  File = 'file',
}

const FilePreview = () => {
  const previewFileId = useChatStore(chatPortalSelectors.previewFileId);
  const chunkText = useChatStore(chatPortalSelectors.chunkText);
  const useFetchFileItem = useFileStore((s) => s.useFetchFileItem);
  const { t } = useTranslation('portal');

  const [tab, setTab] = useState<FilePreviewTab>(FilePreviewTab.File);
  const { data, isLoading } = useFetchFileItem(previewFileId);

  if (isLoading) return <Loading />;
  if (!data) return;

  const showChunk = tab === FilePreviewTab.Chunk && !!chunkText;
  return (
    <Flexbox
      height={'100%'}
      paddingBlock={'0 4px'}
      paddingInline={4}
      style={{ borderRadius: 4, overflow: 'hidden' }}
    >
      {chunkText && (
        <Segmented
          block
          onChange={(v) => setTab(v as FilePreviewTab)}
          options={[
            {
              icon: <Icon icon={BoltIcon} />,
              label: t('FilePreview.tabs.chunk'),
              value: FilePreviewTab.Chunk,
            },
            {
              icon: <Icon icon={FileIcon} />,
              label: t('FilePreview.tabs.file'),
              value: FilePreviewTab.File,
            },
          ]}
          value={tab}
          variant={'filled'}
        />
      )}

      {showChunk ? (
        <Markdown style={{ overflow: 'scroll', paddingInline: 8 }}>{chunkText}</Markdown>
      ) : (
        <Flexbox flex={1} paddingBlock={8} style={{ overflow: 'scroll' }}>
          <FileViewer {...data} />
        </Flexbox>
      )}
    </Flexbox>
  );
};

export default FilePreview;
