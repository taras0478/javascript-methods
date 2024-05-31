const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const result = await makeHttpRequest(url);