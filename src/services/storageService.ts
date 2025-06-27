export const saveUrl = (code: string, originalUrl: string): void => {
  localStorage.setItem(code, originalUrl);
};

export const getUrl = (code: string): string | null => {
  return localStorage.getItem(code);
};
