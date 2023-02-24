const HTMLWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

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
			template: "./public/index.html"
		}),
		new ModuleFederationPlugin({
			name: "products",
			filename: "remoteEntry.js",
			exposes: {
				"./ProductsIndex": "./src/index"
			},
			shared: ["@faker-js/faker"]
		})
	],
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	}
};

// To access this remote, you should call it in container (host) using products@http://localhost:8081/remoteEntry.ts
