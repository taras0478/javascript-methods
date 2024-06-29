const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const symbolsPath = path.join(buildOutputPath, 'symbols');