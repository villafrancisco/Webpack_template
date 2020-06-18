const HtmlWebpackPlugin = require('html-webpack-plugin');

const javascriptRules = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: ['@babel/preset-env']
		}
	}
};
const sassRules = {
	test: /.*\.s[ac]ss$/i,
	use: [
		// Creates `style` nodes from JS strings
		'style-loader',
		// Translates CSS into CommonJS
		'css-loader',
		// Compiles Sass to CSS
		'sass-loader'
	]
};
const pugRules = {
	test: /.*\.pug$/i,
	use: ['pug-loader']
};
module.exports = {
	output: {
		filename: './script.[contentHash].js'
	},
	module: {
		rules: [javascriptRules, pugRules, sassRules]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack Paso a paso',
			template: 'src/index.pug'
		})
	]
};
