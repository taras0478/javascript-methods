const channelName = getChannelName(channel);
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const fullName = name || 'buddy';
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const timeFromDate = date => date.toTimeString().slice(0, 8);