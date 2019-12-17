const presets = [
	[
		"@babel/env",
		{
			useBuiltIns: 'usage',
			corejs: 3,
			// corejs: { version: 3, proposals: true },
			modules: false,
			targets: {
				"esmodules": true
			}
		},
	],
];

const plugins = [
	[
		"@babel/plugin-transform-runtime",
		{
			corejs: false
		}
	]
]


module.exports = {
	presets,
	// plugins
};