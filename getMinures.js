var arr1 = "john".split('');
const isEmptyObject = obj => Object.keys(obj).length === 0;
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;