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
