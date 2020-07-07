const path = require('path');

function fromSource(to) {
  const srcDir = path.resolve(__dirname, 'src');
  return path.resolve(srcDir, to);
}

module.exports = {
  experimental: {
    sassOptions: {
      includePaths: [fromSource('styles')],
      prependData: `@import 'abstracts/index';`,
    },
  },
};
