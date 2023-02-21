const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	devServer: {
		port: 8081
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "public/index.html"
		})
	],
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	}
};
