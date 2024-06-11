var DELIM_SIZE = 4;
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const isWeekday = (date) => date.getDay() % 6 !== 0;