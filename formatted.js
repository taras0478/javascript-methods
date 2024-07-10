const getRandomBoolean = () => Math.random() >= 0.5;
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isArray = (arr) => Array.isArray(arr);