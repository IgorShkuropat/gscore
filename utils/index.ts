export const convertTimestampToDate = (timestamp: string) => {
  const date = new Date(parseInt(timestamp) * 1000).toLocaleDateString();
  return date.replaceAll('/', '.');
};
