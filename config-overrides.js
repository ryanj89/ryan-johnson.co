const reactAppRewirePostcss = require('react-app-rewire-postcss');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = config =>
  reactAppRewirePostcss(config, {
    plugins: () => [postcssPresetEnv(/* options */)],
  });
