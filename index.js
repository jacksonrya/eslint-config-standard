module.exports = {
	env: {
		es2021: true, 
	},
	extends: [
		'eslint:recommended',
		'@jacksonrya/eslint-config-standard/defaults/import'
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module', 
	},
	rules: {
		// 1st. General -> Plugins. 2nd. Alphabetical excluding symbols (e.g. @)
		'array-bracket-spacing': [ 1, 'always' ],
		'array-bracket-newline': [ 2, { 'minItems': 3 } ],
		'array-element-newline': [ 2, { 'minItems': 3 } ],
		'arrow-parens': [ 1, 'as-needed' ],
		'class-methods-use-this': 0,
		'comma-dangle': [ 2, 'always-multiline' ],
		'eol-last': [ 1, 'always' ],
		'func-call-spacing': 'off',
		'function-paren-newline': [ 2, 'multiline' ],
		'global-require': 0,
		'lines-between-class-members': 0,
		'linebreak-style': 0,
		'max-len': [ 1, 120 ],
		'no-async-promise-executor': 1,
		'no-confusing-arrow': [ 'error', { allowParens: true } ],
		'no-empty-function': 'warn',
		'no-multiple-empty-lines': [ 'error', {
			max: 2,
			maxEOF: 1,
			maxBOF: 1,
		} ],
		'no-tabs': [ 'error', { allowIndentationTabs: true } ],
		'no-unused-expressions': 0,
		'object-curly-newline': [ 2, {
			'ObjectExpression': { 'multiline': true, 'minProperties': 3 },
			'ObjectPattern': { 'multiline': true, 'minProperties': 3 },
			'ImportDeclaration': { 'multiline': true, 'minProperties': 3 },
			'ExportDeclaration': { 'multiline': true, 'minProperties': 3 },
		} ],
		'object-curly-spacing': [ 2, 'always' ],
		'object-property-newline': [ 2, { 'allowAllPropertiesOnSameLine': true } ],
		'prefer-object-spread': 1,
		quotes: [
			2,
			'single',
			'avoid-escape', 
		],
		indent: 'off',
	},
}
