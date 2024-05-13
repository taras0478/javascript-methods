const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
console.log(false == '0');