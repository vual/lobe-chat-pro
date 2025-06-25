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
