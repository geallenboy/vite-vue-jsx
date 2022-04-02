const vue3Lint = require('@garron/standard/dist/vue3Lint');

vue3Lint.rules['vue/require-prop-types'] = 'off';

module.exports = {
  ...vue3Lint
};
