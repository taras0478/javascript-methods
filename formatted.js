const randomString = () => Math.random().toString(36).slice(2);
const intermediateAppPath = path.join(buildOutputPath, 'app');
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));