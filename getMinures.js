const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());