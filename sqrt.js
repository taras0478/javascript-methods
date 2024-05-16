const symbolsPath = path.join(buildOutputPath, 'symbols');
const getRandomBoolean = () => Math.random() >= 0.5;
const sumArray = arr => arr.reduce((total, current) => total + current, 0);