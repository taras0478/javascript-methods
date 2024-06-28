console.log(false === '0');
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};