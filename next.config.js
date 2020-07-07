const path = require('path');

function fromSource(to) {
  return path.resolve(__dirname, 'src', to);
}

module.exports = {
  webpack: require('./lib/injectSassPrependData'),
  sassOptions: {
    includePaths: [fromSource('styles')],
  },
};
