module.exports = {
  env: {
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    'import-helpers',
    'eslint-plugin-import-helpers',
    'eslint-plugin-unused-imports',
  ],
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^@shared/',
          '/^react/',
          'module',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
    'class-methods-use-this': 0,
    'no-restricted-imports': ['error', 'date-fns'],
    'unused-imports/no-unused-imports': 'error',
    'max-len': ['error', 150],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/prop-types': 'off',
    // 'react-hooks/exhaustive-deps': 'warn',
  },
};
