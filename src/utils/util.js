export const uppercaseFirstLetter = (str) => {
  const newString = str.toLowerCase();
  return newString.charAt(0).toUpperCase() + newString.slice(1);
};
