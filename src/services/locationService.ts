export const getLocationInfo = async (): Promise<string> => {
  const response = await fetch('https://ipapi.co/json/');
  const data = await response.json();
  return data.city || 'Unknown';
};
