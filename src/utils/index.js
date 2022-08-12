export const generatePromise = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(value);
        }, 300);
      });
}

export const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
  });
};
