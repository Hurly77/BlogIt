export const slugifiy = (string) => {
  return string
    .toLowerCase()
    .replace(/[^\w]+/g, '-')
    .replace(/ +/g, '-')
};

export default slugifiy;
