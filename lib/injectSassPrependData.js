module.exports = (config) => {
  const rule = config.module.rules.find((rule) =>
    Object.keys(rule).includes('oneOf'),
  );

  if (rule) {
    const scssRules = rule.oneOf.filter(
      (r) =>
        ('test.scss'.match(r.test) || 'test.module.scss'.match(r.test)) &&
        Array.isArray(r.use),
    );

    if (scssRules) {
      for (const scssRule of scssRules) {
        const sassLoader = scssRule.use.find((u) =>
          u.loader.match('sass-loader'),
        );

        if (sassLoader) {
          sassLoader.options = {
            ...sassLoader.options,
            prependData: `@import 'abstracts/index';`,
          };
        }
      }
    }
  }

  return config;
};
