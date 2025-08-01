'use client';

// Removed Image import - using img tags instead
import { createStyles, useTheme } from 'antd-style';
import { Image as ImageIcon, X } from 'lucide-react';
import Image from 'next/image';
import React, { type FC, memo, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Center } from 'react-layout-kit';

import { useFileStore } from '@/store/file';
import { FileUploadStatus } from '@/types/files/upload';

import { CONFIG_PANEL_WIDTH } from '../../constants';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { useConfigPanelStyles } from '../../style';
import ImageManageModal, { type ImageItem } from './ImageManageModal';

// ======== Business Types ======== //

/**
 * Internal type for managing upload state and display
 */
interface DisplayItem {
  // Upload status - using the correct type from file upload system
  error?: string;
  // URL for display, can be a blob: URL for local previews or a remote URL
  file?: File;
  id: string;
  // Error message if upload failed
  progress?: number;
  // The raw File object, present only for new, not-yet-uploaded images
  status?: FileUploadStatus;
  // Unique identifier for the item
  url: string; // Upload progress (0-100)
}

export interface MultiImagesUploadProps {
  // Callback when URLs change
  className?: string; // Array of image URLs
  onChange?: (urls: string[]) => void;
  style?: React.CSSProperties;
  value?: string[];
}

// ======== Styles ======== //

const useStyles = createStyles(({ css, token }) => {
  // Calculate available width for thumbnails
  // Panel width - outer padding (16px * 2) - gaps (8px * 3 for 4 items)
  const availableWidth = CONFIG_PANEL_WIDTH - 32 - 24;
  const thumbnailSize = availableWidth / 4;

  return {
    deleteIcon: css`
      cursor: pointer;

      position: absolute;
      z-index: 10;
      inset-block-start: 4px;
      inset-inline-end: 4px;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 20px;
      height: 20px;
      border-radius: 50%;

      color: ${token.colorTextLightSolid};

      opacity: 0;
      background: ${token.colorBgMask};

      transition: opacity 0.2s ease;

      &:hover {
        color: ${token.colorError};
        background: ${token.colorErrorBg};
      }
    `,

    imageItem: css`
      position: relative;

      overflow: hidden;

      width: ${thumbnailSize}px;
      height: ${thumbnailSize}px;
      border-radius: ${token.borderRadius}px;

      background: ${token.colorBgContainer};

      &:hover .delete-icon {
        opacity: 1;
      }
    `,

    // Image thumbnails styles
    imageThumbnails: css`
      cursor: pointer;

      display: flex;
      gap: 8px;

      width: 100%;
      height: ${thumbnailSize}px;
      padding: 0;
      border-radius: ${token.borderRadiusLG}px;

      transition: all 0.2s ease;

      &.drag-over {
        transform: scale(1.02);
        background: ${token.colorPrimaryBg};
      }
    `,

    moreOverlay: css`
      position: absolute;
      inset-block: 0 0;
      inset-inline: 0 0;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 16px;
      font-weight: 600;
      color: ${token.colorTextLightSolid};

      background: ${token.colorBgMask};
    `,

    placeholder: css`
      cursor: pointer;

      width: 100%;
      height: 120px;
      border: 2px dashed ${token.colorBorder};
      border-radius: ${token.borderRadiusLG}px;

      background: ${token.colorFillAlter};

      transition: all 0.2s ease;

      &:hover {
        border-color: ${token.colorPrimary};
        background: ${token.colorFillSecondary};
      }

      &.drag-over {
        transform: scale(1.02);
        border-color: ${token.colorPrimary};
        background: ${token.colorPrimaryBg};
      }
    `,

    placeholderIcon: css`
      color: ${token.colorTextTertiary};
    `,

    placeholderText: css`
      font-size: 12px; /* Made smaller than default token.fontSize (14px) */
      line-height: 1.4;
      color: ${token.colorTextSecondary};
      text-align: center;
    `,

    progress: css`
      cursor: pointer;

      position: relative;

      overflow: hidden;

      width: 100%;
      height: 120px;
      border: 2px solid ${token.colorPrimary};
      border-radius: ${token.borderRadiusLG}px;

      background: ${token.colorFillSecondary};

      transition: all 0.2s ease;

      &.drag-over {
        transform: scale(1.02);
        background: ${token.colorPrimaryBg};
      }
    `,

    progressPrimary: css`
      margin-block-end: 4px;
      font-size: 14px;
      font-weight: 600;
      color: ${token.colorPrimary};
    `,

    progressText: css`
      font-size: 12px;
      font-weight: 500;
      line-height: 1.4;
      color: ${token.colorText};
      text-align: center;
    `,
    // Single image display styles
    singleImageDisplay: css`
      cursor: pointer;

      position: relative;

      overflow: hidden;

      width: 100%;
      height: 160px;
      border-radius: ${token.borderRadiusLG}px;

      background: ${token.colorBgContainer};

      transition: all 0.2s ease;

      &:hover .upload-more-overlay {
        opacity: 1;
      }

      &:hover .delete-icon {
        opacity: 1;
      }

      &.drag-over {
        transform: scale(1.02);
        background: ${token.colorPrimaryBg};
      }
    `,
    uploadMoreButton: css`
      cursor: pointer;

      padding-block: 8px;
      padding-inline: 16px;
      border: 1px solid ${token.colorBorder};
      border-radius: ${token.borderRadius}px;

      font-size: 12px;
      font-weight: 500;
      color: ${token.colorText};

      background: ${token.colorBgContainer};
      box-shadow: ${token.boxShadowSecondary};

      &:hover {
        border-color: ${token.colorPrimary};
        color: ${token.colorPrimary};
        background: ${token.colorBgElevated};
      }
    `,
    uploadMoreOverlay: css`
      position: absolute;
      z-index: 5;
      inset-block: 0 0;
      inset-inline: 0 0;

      display: flex;
      align-items: center;
      justify-content: center;

      opacity: 0;
      background: ${token.colorBgMask};

      transition: opacity 0.2s ease;
    `,
  };
});

// ======== Utils ======== //

/**
 * Check if a URL is a local blob URL
 * @param url - The URL to check
 * @returns true if the URL is a blob URL
 */
const isLocalBlobUrl = (url: string): boolean => url.startsWith('blob:');

// ======== Sub-Components ======== //

interface ImageUploadPlaceholderProps {
  isDragOver?: boolean;
  onClick?: () => void;
}

const ImageUploadPlaceholder: FC<ImageUploadPlaceholderProps> = memo(({ isDragOver, onClick }) => {
  const { styles } = useStyles();
  const { t } = useTranslation('components');

  return (
    <Center
      className={`${styles.placeholder} ${isDragOver ? 'drag-over' : ''}`}
      gap={16}
      horizontal={false}
      onClick={onClick}
    >
      <ImageIcon className={styles.placeholderIcon} size={48} strokeWidth={1.5} />
      <div className={styles.placeholderText}>
        {t('MultiImagesUpload.placeholder.primary')}
        <br />
        {t('MultiImagesUpload.placeholder.secondary')}
      </div>
    </Center>
  );
});

ImageUploadPlaceholder.displayName = 'ImageUploadPlaceholder';

// ======== 圆形进度组件 ======== //

interface CircularProgressProps {
  className?: string;
  showText?: boolean;
  // 0-100
  size?: number;
  strokeWidth?: number;
  value: number;
}

const CircularProgress: FC<CircularProgressProps> = memo(
  ({ value, size = 48, strokeWidth = 4, className, showText = true }) => {
    const theme = useTheme();

    // Ensure value is between 0 and 100
    const progress = Math.min(100, Math.max(0, value));

    // Calculate circle properties
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

    return (
      <div
        className={className}
        style={{
          alignItems: 'center',
          display: 'flex',
          height: size,
          justifyContent: 'center',
          position: 'relative',
          width: size,
        }}
      >
        {/* Background circle */}
        <svg
          height={size}
          style={{ position: 'absolute', transform: 'rotate(-90deg)' }}
          width={size}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            fill="none"
            r={radius}
            stroke={theme.colorBorder}
            strokeWidth={strokeWidth}
          />
        </svg>

        {/* Progress circle */}
        <svg
          height={size}
          style={{ position: 'absolute', transform: 'rotate(-90deg)' }}
          width={size}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            fill="none"
            r={radius}
            stroke={theme.colorPrimary}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            strokeWidth={strokeWidth}
            style={{
              transition: 'stroke-dashoffset 0.2s ease-in-out',
            }}
          />
        </svg>

        {/* Progress text */}
        {showText && (
          <span
            style={{
              color: theme.colorPrimary,
              fontSize: '12px',
              fontWeight: 600,
              position: 'relative',
              zIndex: 1,
            }}
          >
            {Math.round(progress)}%
          </span>
        )}
      </div>
    );
  },
);

CircularProgress.displayName = 'CircularProgress';

interface ImageUploadProgressProps {
  completedCount: number;
  currentProgress: number;
  showCount?: boolean;
  totalCount: number;
}

const ImageUploadProgress: FC<ImageUploadProgressProps> = memo(
  ({ completedCount, totalCount, currentProgress, showCount = true }) => {
    const { styles } = useStyles();
    const { t } = useTranslation('components');

    return (
      <Center className={styles.progress} gap={16} horizontal={false}>
        {/* 圆形进度条 */}
        <CircularProgress size={60} strokeWidth={6} value={currentProgress} />

        {/* 进度文本 */}
        <div className={styles.progressText}>
          {showCount ? (
            <div className={styles.progressPrimary}>
              {t('MultiImagesUpload.progress.uploadingWithCount', {
                completed: completedCount,
                total: totalCount,
              })}
            </div>
          ) : null}
        </div>
      </Center>
    );
  },
);

ImageUploadProgress.displayName = 'ImageUploadProgress';

interface ImageThumbnailsProps {
  images: string[];
  isDragOver?: boolean;
  onClick?: () => void;
  onDelete?: (index: number) => void;
}

const ImageThumbnails: FC<ImageThumbnailsProps> = memo(
  ({ images, isDragOver, onClick, onDelete }) => {
    const { styles } = useStyles();
    const { styles: configStyles } = useConfigPanelStyles();

    // Display max 4 images, with overflow indication
    const displayImages = images.slice(0, 4);
    const remainingCount = Math.max(0, images.length - 3); // Show +x for images beyond first 3

    const handleDelete = (index: number, event: React.MouseEvent) => {
      event.stopPropagation(); // Prevent triggering container click
      onDelete?.(index);
    };

    const renderImageItem = (imageUrl: string, index: number) => {
      const isLastItem = index === 3;
      const showOverlay = isLastItem && remainingCount > 1;

      return (
        <div className={styles.imageItem} key={imageUrl}>
          <Image
            alt={`Uploaded image ${index + 1}`}
            fill
            src={imageUrl}
            style={{ objectFit: 'cover' }}
            unoptimized
          />
          {!showOverlay && (
            <div
              className={`${styles.deleteIcon} delete-icon`}
              onClick={(e) => handleDelete(index, e)}
            >
              <X size={12} />
            </div>
          )}
          {showOverlay && <div className={styles.moreOverlay}>+{remainingCount}</div>}
        </div>
      );
    };

    return (
      <div
        className={`${styles.imageThumbnails} ${configStyles.dragTransition} ${isDragOver ? configStyles.dragOver : ''}`}
        onClick={onClick}
      >
        {displayImages.map(renderImageItem)}
      </div>
    );
  },
);

ImageThumbnails.displayName = 'ImageThumbnails';

interface SingleImageDisplayProps {
  imageUrl: string;
  isDragOver?: boolean;
  onClick?: () => void;
  onDelete?: () => void;
}

const SingleImageDisplay: FC<SingleImageDisplayProps> = memo(
  ({ imageUrl, isDragOver, onClick, onDelete }) => {
    const { styles } = useStyles();
    const { styles: configStyles } = useConfigPanelStyles();
    const { t } = useTranslation('components');

    const handleDelete = (event: React.MouseEvent) => {
      event.stopPropagation(); // Prevent triggering container click
      onDelete?.();
    };

    const handleOverlayClick = (event: React.MouseEvent) => {
      event.stopPropagation(); // Prevent triggering container click
      onClick?.();
    };

    return (
      <div
        className={`${styles.singleImageDisplay} ${configStyles.dragTransition} ${isDragOver ? configStyles.dragOver : ''}`}
      >
        <Image
          alt="Uploaded image"
          fill
          src={imageUrl}
          style={{ objectFit: 'contain' }}
          unoptimized
        />

        {/* Delete button */}
        <div className={`${styles.deleteIcon} delete-icon`} onClick={handleDelete}>
          <X size={12} />
        </div>

        {/* Upload more overlay */}
        <div
          className={`${styles.uploadMoreOverlay} upload-more-overlay`}
          onClick={handleOverlayClick}
        >
          <button className={styles.uploadMoreButton} type="button">
            {t('MultiImagesUpload.actions.uploadMore')}
          </button>
        </div>
      </div>
    );
  },
);

SingleImageDisplay.displayName = 'SingleImageDisplay';

// ======== Main Component ======== //

const MultiImagesUpload: FC<MultiImagesUploadProps> = memo(
  ({ value, onChange, style, className }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const uploadWithProgress = useFileStore((s) => s.uploadWithProgress);
    const [displayItems, setDisplayItems] = useState<DisplayItem[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const { styles: configStyles } = useConfigPanelStyles();

    // Cleanup blob URLs to prevent memory leaks
    useEffect(() => {
      return () => {
        // Cleanup function: revoke all blob URLs when component unmounts or displayItems change
        displayItems.forEach((item) => {
          if (item.file && isLocalBlobUrl(item.url)) {
            URL.revokeObjectURL(item.url);
          }
        });
      };
    }, [displayItems]);

    const handlePlaceholderClick = () => {
      inputRef.current?.click();
    };

    const handleOpenModal = () => {
      setModalOpen(true);
    };

    const handleCloseModal = () => {
      setModalOpen(false);
    };

    const handleDelete = (index: number) => {
      if (!value) return;
      const newUrls = value.filter((_, i) => i !== index);
      onChange?.(newUrls);
    };

    const handleFilesSelected = async (files: File[], baseUrls?: string[]) => {
      if (files.length === 0) return;

      const currentUrls = baseUrls !== undefined ? baseUrls : value || [];

      // Create initial display items with blob URLs for immediate preview
      const newDisplayItems: DisplayItem[] = files.map((file) => ({
        file,
        id: `${Date.now()}-${file.name}`,
        progress: 0,
        status: 'pending' as FileUploadStatus,
        url: URL.createObjectURL(file),
      }));

      setDisplayItems((prev) => [...prev, ...newDisplayItems]);

      // Start uploading files
      const uploadPromises = newDisplayItems.map((item) =>
        uploadWithProgress({
          file: item.file!,
          // Skip file type check for images
          onStatusUpdate: (updateData) => {
            if (updateData.type === 'updateFile') {
              setDisplayItems((prev) =>
                prev.map((displayItem) =>
                  displayItem.id === item.id
                    ? {
                        ...displayItem,
                        error: updateData.value.status === 'error' ? 'Upload failed' : undefined,
                        progress: updateData.value.uploadState?.progress || 0,
                        status: updateData.value.status,
                      }
                    : displayItem,
                ),
              );
            } else if (updateData.type === 'removeFile') {
              setDisplayItems((prev) => prev.filter((displayItem) => displayItem.id !== item.id));
            }
          },
          skipCheckFileType: true,
        }),
      );

      // Wait for all uploads to complete and collect successful URLs
      const uploadResults = await Promise.allSettled(uploadPromises);
      const successfulUrls: string[] = [];

      uploadResults.forEach((result, index) => {
        const displayItem = newDisplayItems[index];

        if (result.status === 'fulfilled' && result.value) {
          successfulUrls.push(result.value.url);

          // Update display item with final URL and success status
          setDisplayItems((prev) =>
            prev.map((item) =>
              item.id === displayItem.id
                ? {
                    ...item,
                    file: undefined,
                    progress: 100,
                    status: 'success',
                    url: result.value!.url, // Clear file reference after successful upload
                  }
                : item,
            ),
          );
        } else {
          // Handle upload failure
          setDisplayItems((prev) =>
            prev.map((item) =>
              item.id === displayItem.id
                ? {
                    ...item,
                    error: 'Upload failed',
                    progress: 0,
                    status: 'error',
                  }
                : item,
            ),
          );
        }

        // Clean up blob URL regardless of success or failure
        if (isLocalBlobUrl(displayItem.url)) {
          URL.revokeObjectURL(displayItem.url);
        }
      });

      // Update parent component with new URLs
      if (successfulUrls.length > 0) {
        const updatedUrls = [...currentUrls, ...successfulUrls];
        onChange?.(updatedUrls);
      }

      // Clear display items after all uploads complete
      setTimeout(() => {
        setDisplayItems([]);
      }, 1000); // Show success state for 1 second before clearing
    };

    const handleFilesChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (!files || files.length === 0) return;

      await handleFilesSelected(Array.from(files));
    };

    // ======== Drag and Drop Handlers ======== //

    const handleDrop = async (files: File[]) => {
      // Add all image files to existing images
      await handleFilesSelected(files);
    };

    const { isDragOver, dragHandlers } = useDragAndDrop({
      accept: 'image/*',
      onDrop: handleDrop,
    });

    // 处理 Modal 完成回调
    const handleModalComplete = async (imageItems: ImageItem[]) => {
      // 分离现有URL和新文件
      const existingUrls = imageItems.filter((item) => item.url).map((item) => item.url!);

      const newFiles = imageItems.filter((item) => item.file).map((item) => item.file!);

      // 立即更新现有URL（删除的图片会被过滤掉）
      onChange?.(existingUrls);

      // 如果有新文件需要上传，基于 existingUrls 启动上传流程
      if (newFiles.length > 0) {
        await handleFilesSelected(newFiles, existingUrls);
      }
    };

    // Calculate progress data
    const totalFiles = displayItems.length;
    const completedFiles = displayItems.filter((item) => (item.progress || 0) >= 100).length;
    const overallProgress =
      totalFiles > 0
        ? displayItems.reduce((sum, item) => sum + (item.progress || 0), 0) / totalFiles
        : 0;

    const hasImages = value && value.length > 0;
    const isUploading = displayItems.length > 0;
    const isSingleImage = value && value.length === 1;

    return (
      <div className={className} {...dragHandlers} style={style}>
        {/* Hidden file input */}
        <input
          accept="image/*"
          multiple
          onChange={handleFilesChange}
          onClick={(e) => {
            // Reset value to allow re-selecting the same file
            e.currentTarget.value = '';
          }}
          ref={inputRef}
          style={{ display: 'none' }}
          type="file"
        />

        {/* Conditional rendering based on state */}
        {isUploading ? (
          <div
            className={`${configStyles.dragTransition} ${isDragOver ? configStyles.dragOver : ''}`}
          >
            <ImageUploadProgress
              completedCount={completedFiles}
              currentProgress={overallProgress}
              showCount={totalFiles > 1}
              totalCount={totalFiles}
            />
          </div>
        ) : isSingleImage ? (
          <SingleImageDisplay
            imageUrl={value[0]}
            isDragOver={isDragOver}
            onClick={handleOpenModal}
            onDelete={() => handleDelete(0)}
          />
        ) : hasImages ? (
          <ImageThumbnails
            images={value || []}
            isDragOver={isDragOver}
            onClick={handleOpenModal}
            onDelete={handleDelete}
          />
        ) : (
          <ImageUploadPlaceholder isDragOver={isDragOver} onClick={handlePlaceholderClick} />
        )}

        {/* Image Management Modal */}
        <ImageManageModal
          images={value || []}
          onClose={handleCloseModal}
          onComplete={handleModalComplete}
          open={modalOpen}
        />
      </div>
    );
  },
);

MultiImagesUpload.displayName = 'MultiImagesUpload';

export default MultiImagesUpload;
