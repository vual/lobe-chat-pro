const config = require('@lobehub/lint').eslint;

config.extends.push('plugin:@next/next/recommended');

config.rules['unicorn/no-negated-condition'] = 0;
config.rules['unicorn/prefer-type-error'] = 0;
config.rules['unicorn/prefer-logical-operator-over-ternary'] = 0;
config.rules['unicorn/no-null'] = 0;
config.rules['unicorn/no-typeof-undefined'] = 0;
config.rules['unicorn/explicit-length-check'] = 0;
config.rules['unicorn/prefer-code-point'] = 0;
config.rules['no-extra-boolean-cast'] = 0;
config.rules['unicorn/no-useless-undefined'] = 0;
config.rules['react/no-unknown-property'] = 0;
config.rules['unicorn/prefer-ternary'] = 0;
config.rules['unicorn/prefer-spread'] = 0;
config.rules['unicorn/catch-error-name'] = 0;
config.rules['unicorn/no-array-for-each'] = 0;
config.rules['unicorn/prefer-number-properties'] = 0;
config.rules['unicorn/prefer-query-selector'] = 0;
config.rules['unicorn/no-array-callback-reference'] = 0;
// FIXME: Linting error in src/app/[variants]/(main)/chat/features/Migration/DBReader.ts, the fundamental solution should be upgrading typescript-eslint
config.rules['@typescript-eslint/no-useless-constructor'] = 0;

config.overrides = [
  {
    extends: ['plugin:mdx/recommended'],
    files: ['*.mdx'],
    rules: {
      '@typescript-eslint/no-unused-vars': 1,
      'no-undef': 0,
      'react/jsx-no-undef': 0,
      'react/no-unescaped-entities': 0,
    },
    settings: {
      'mdx/code-blocks': false,
    },
  },
];

module.exports = config;
