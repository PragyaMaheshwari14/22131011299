const clickData: Record<string, number> = {};

export const recordClick = (code: string): void => {
  clickData[code] = (clickData[code] || 0) + 1;
};

export const getClickStats = (): Record<string, number> => {
  return { ...clickData };
};
