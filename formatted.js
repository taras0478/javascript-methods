const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const merge = Object.assign({}, obj1, obj2);