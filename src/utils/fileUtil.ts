import { createHeaderWithAuth } from '@/services/_auth';
import { clientS3Storage } from '@/services/file/ClientS3';
import { uploadService } from '@/services/upload';
import { inferContentTypeFromImageUrl } from '@/utils/url';
import { nanoid } from '@/utils/uuid';

export const fileToBase64 = (file: File, removePrefix?: boolean): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file as any);
    reader.addEventListener('load', () => {
      if (removePrefix) {
        resolve((reader.result as string).split(',')[1]);
      } else {
        resolve(reader.result as string);
      }
    });
    reader.addEventListener('error', (error) => reject(error));
  });
};

export const base64ToFile = (base64: string, filename: string): Promise<File> => {
  return new Promise((resolve) => {
    const arr = base64.startsWith('data:') ? base64.split(',') : ['data:image/png;base64', base64];
    const mime = arr[0].match(/:(.*?);/)?.[1] ?? 'image/png';
    const bstr = atob(arr.length > 1 ? arr[1] : arr[0]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    resolve(new File([u8arr], filename, { type: mime }));
  });
};

export function getImageSuffix(url: string): string {
  if (url.includes('.webp')) return 'webp';
  if (url.includes('.jpeg') || url.includes('.jpg')) return 'jpeg';

  try {
    const mimeType = inferContentTypeFromImageUrl(url);
    if (mimeType) return mimeType.split('/')[1];
  } catch (e) {
    console.log('inferContentTypeFromImageUrl error', e);
  }

  return 'png';
}

export function getImageFileFromUrl(url: string): Promise<File> {
  return new Promise<File>((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.addEventListener('error', (e) => reject(e));
    image.addEventListener('load', () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      if (!context) {
        reject('read image error!');
        return;
      }

      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0);

      const type = getImageSuffix(url);
      canvas.toBlob((blob) => {
        if (!blob) {
          reject('read image error!');
          return;
        }

        resolve(
          new File([blob], `${nanoid()}.${type}`, {
            lastModified: Date.now(),
            type: blob.type,
          }),
        );
      }, `image/${type}`);
    });
    image.src = url;
  });
}

export const wsrvUrl = (url: string) => {
  const arr = url.split(/([a-z-]+)ttachments/gi, 3);
  const urlStr = arr.length === 3 ? `https://cdn.discordapp.com/${arr[1]}ttachments${arr[2]}` : url;

  return `https://wsrv.nl/?url=${encodeURIComponent(urlStr)}`;
};

export const saveImageByUrl = async (imageUrl: string, directory: string) => {
  let file: File;

  try {
    file = await getImageFileFromUrl(imageUrl);
  } catch (e) {
    console.log('imageurl to file error!', e);
    try {
      file = await getImageFileFromUrl(wsrvUrl(imageUrl));
    } catch (error) {
      console.log('imageurl to file by wsrvUrl error!', error);
      file = await uploadService.getImageFileByUrlWithCORS(
        imageUrl,
        `${nanoid()}.${getImageSuffix(imageUrl)}`,
      );
    }
  }

  try {
    const metadata = await uploadService.uploadFileToS3(file, { directory });

    return metadata.success ? metadata.data.path : imageUrl;
  } catch (e) {
    console.log('save image error', e);
  }

  return imageUrl;
};

export const saveImageByBase64 = async (base64: string, directory: string) => {
  try {
    const normalized = base64.startsWith('data:') ? base64 : `data:image/png;base64,${base64}`;
    const { metadata } = await uploadService.uploadBase64ToS3(normalized, { directory });

    return metadata.path;
  } catch (e) {
    console.log('save image base64 error', e);
  }

  return base64;
};

export const getOssFilePreviewUrl = async (keyPathList: string[]) => {
  const fallback = Object.fromEntries(keyPathList.map((path) => [path, path]));

  try {
    const headers = await createHeaderWithAuth({
      headers: { 'Content-Type': 'application/json' },
    });

    const response = await fetch('/webapi/oss/getPreviewUrl', {
      body: JSON.stringify(keyPathList),
      headers,
      method: 'POST',
    });

    if (!response.ok) return fallback;

    return await response.json();
  } catch (e) {
    console.log('getOssFilePreviewUrl error', e);
    return fallback;
  }
};

export const createImageFromFile = (file: File): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      const image = new Image();
      image.addEventListener('load', () => resolve(image));
      image.addEventListener('error', (error) => reject(error));
      image.src = event.target?.result as string;
    });
    reader.addEventListener('error', (error) => reject(error));
    reader.readAsDataURL(file);
  });
};

export const mergeImagesAsBase64 = async (
  imageFiles1: File,
  imageFiles2: File,
  removePrefix?: boolean,
) => {
  const image1 = await createImageFromFile(imageFiles1);
  const image2 = await createImageFromFile(imageFiles2);

  const totalWidth = image1.width + image2.width;
  const maxHeight = Math.max(image1.height, image2.height);
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) return '';

  canvas.width = totalWidth;
  canvas.height = maxHeight;
  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image1, 0, (maxHeight - image1.height) / 2, image1.width, image1.height);
  context.drawImage(
    image2,
    image1.width,
    (maxHeight - image2.height) / 2,
    image2.width,
    image2.height,
  );

  const imageBase64 = canvas.toDataURL('image/png');

  return removePrefix ? imageBase64.split(',')[1] : imageBase64;
};

export const getLocalS3File = async (path: string) => {
  const hash = path.replace('client-s3://', '');

  return clientS3Storage.getObject(hash);
};

export const getLocalFileUrl = async (path: string) => {
  const file = await getLocalS3File(path);
  if (file) return URL.createObjectURL(file);

  console.log('getLocalFileUrl error', path);
  return '';
};

export const isOssKeyPath = (path?: string) => {
  return (
    path &&
    !path.startsWith('http') &&
    !path.startsWith('client-s3') &&
    !path.startsWith('data:') &&
    path.length < 200
  );
};
