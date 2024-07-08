const merge = Object.assign({}, obj1, obj2);
const reversedString = str => str.split('').reverse().join('');
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;