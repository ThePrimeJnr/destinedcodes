const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  ...styleguide,
  plugins: [
    ...styleguide.plugins,
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@core/(.*)$',
    '^@server/(.*)$',
    '^@ui/(.*)$',
    '^@/lib/(.*)$',
    '^@/components/(.*)$',
    '^@/app/(.*)$',
    'interface',
    '(?=content|api)',
    'context/',
    'mock/',
    'config',
    'utils/',
    'hooks/',
    '(components/|./index)',
    '.svg',
    '^../(.*)$',
    '^[./]',
    '(?=./styles.module.scss)',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
