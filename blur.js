const toggleBool = () => (bool = !bool);
const repositoryRootPath = path.resolve(__dirname, '..');
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());