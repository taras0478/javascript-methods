const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEmptyObject = obj => Object.keys(obj).length === 0;
const uniqueArr = (arr) => [...new Set(arr)];
console.log("0 && 1 = "+(0 && 1));