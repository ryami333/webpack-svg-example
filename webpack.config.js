const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.svg$/,
				issuer: {
					// Only use this loader if issued from an HTML file.
					test: /\.html$/,
				},
				loader: 'raw-loader',
			},
			// Can add another rule set here for use within '.js' files
		],
	},
	plugins: [
		// Generate a root HTML file.
		new HtmlWebpackPlugin({
			template: `src/index.html`,
		}),
	],
};
