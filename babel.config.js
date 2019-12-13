const presets = [
	[
		"@babel/env",
		{
			useBuiltIns: 'usage',
			corejs: 3,
			// corejs: { version: 3, proposals: true },
			// modules: false
		},
	],
];

const plugins = [
	[
		"@babel/plugin-transform-runtime",
		{
			corejs: 3
		}
	]
]


module.exports = {
	presets,
	// plugins
};