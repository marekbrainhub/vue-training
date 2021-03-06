module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'brainhub',
		'plugin:vue/essential',
		'eslint:recommended',
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	},
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.vue'],
        alias: { '@': 'src' }
      },
    }
  },
	parserOptions: {
		parser: 'babel-eslint'
	}
}
