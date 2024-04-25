const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const buildOutputPath = path.join(repositoryRootPath, 'out');
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);