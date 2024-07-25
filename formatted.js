const intermediateAppPath = path.join(buildOutputPath, 'app');
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};