const path = require('path');

function fromSource(to) {
  const srcDir = path.resolve(__dirname, 'src');
  return path.resolve(srcDir, to);
}

module.exports = {
  webpack: (config) => {
    let rule, moduleRules, cssLoader, scssRules, sassLoader;
    if (
      (rule = config.module.rules.find((rule) =>
        Object.keys(rule).includes('oneOf'),
      ))
    ) {
      // Locate sass-loader config
      if (
        (scssRules = rule.oneOf.filter(
          (r) =>
            ('test.scss'.match(r.test) || 'test.module.scss'.match(r.test)) &&
            Array.isArray(r.use),
        ))
      ) {
        for (const scssRule of scssRules) {
          if (
            (sassLoader = scssRule.use.find((u) =>
              u.loader.match('sass-loader'),
            ))
          ) {
            sassLoader.options = {
              ...sassLoader.options,
              // Your custom sass-loader options below.
              prependData: `@import 'abstracts/index';`,
            };
          }
        }
      }
    }
    return config;
  },
  sassOptions: {
    includePaths: [fromSource('styles')],
  },
};
