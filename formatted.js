const result = await makeHttpRequest(url);
const apmRootPath = path.join(repositoryRootPath, 'apm');
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));