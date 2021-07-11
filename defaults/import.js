module.exports = {
	extends: [
		'plugin:import/errors',
		'plugin:import/warnings',
	],
	plugins: [ 'import' ],
	settings: {
		'import/core-modules': [ 'react', 'typeorm', 'express' ],
		'import/extensions': [ 'js' ], 
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@/components', './src/components']
        ],
        extensions: ['.vue', '.js', 'json']
      }
    }
	},
	rules: {
		'import/extensions': [ 0, 'never' ],
		'import/no-unresolved': [ 2, {
			ignore: [ '^react$' ],
			caseSensitive: false, 
		} ],
		'import/order': [ 'error', {
			groups: [
				[ 'builtin', 'external' ],
				'internal',
				'parent',
				'sibling',
				'index',
				'object',
			],
			'newlines-between': 'always',
			alphabetize: {
				order: 'asc',
				caseInsensitive: true, 
			},
		} ],
		'import/prefer-default-export': 0,
	},
}
