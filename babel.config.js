const presets = [
	[
		"@babel/env",
		{
			// useBuiltIns: 'usage',
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
	plugins
};