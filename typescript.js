module.exports = {
		extends: [
				'plugin:import/typescript',
				'plugin:@typescript-eslint/recommended'
		],
	parser: '@typescript-eslint/parser',
	plugins: [ '@typescript-eslint' ],
	settings: {
		'import-extensions': ['ts'],
		'import/resolver': { typescript: {} },
	},
	rules: {
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/explicit-function-return-type': [0],
		'@typescript-eslint/explicit-member-accessibility': [0],
		'@typescript-eslint/func-call-spacing': [1],
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/interface-name-prefix': 0,
		'@typescript-eslint/no-empty-function': 'warn',
		'@typescript-eslint/no-unused-vars': [1, {
			argsIgnorePattern: '^_',
			ignoreRestSiblings: true,
		}],
		'@typescript-eslint/no-use-before-define': [0],
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/semi': [1],
	}
}
