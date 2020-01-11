module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    "ecmaFeatures": {
			"jsx": true
		},
    ecmaVersion: 2018,
    sourceType: 'module',
    project: "./tsconfig.json",
  },
  settings: {
		"react": {
			"version": "detect",
		}
	},
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ["error", { "argsIgnorePattern": "^_" }],
  },
};