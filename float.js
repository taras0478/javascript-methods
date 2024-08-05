const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);