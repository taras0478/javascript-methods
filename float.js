const apmRootPath = path.join(repositoryRootPath, 'apm');
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const goToTop = () => window.scrollTo(0, 0);