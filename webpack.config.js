const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.svg$/,
				loader: 'raw-loader',
			},
		],
	},
	plugins: [
		// Generate a root HTML file.
		new HtmlWebpackPlugin({
			template: `src/index.html`,
		}),
	],
};
