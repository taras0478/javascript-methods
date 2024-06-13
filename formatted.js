const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const results = await Promise.all(resultingPromises);