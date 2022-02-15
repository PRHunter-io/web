export const formatDate = (date) => {
  const formattedDate = new Date(date).toLocaleString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
  return formattedDate;
};
