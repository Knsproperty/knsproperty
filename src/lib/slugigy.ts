const slugify = (text: string) => {
  return text.toLowerCase().replace(/ /g, "-");
};
export default slugify;
