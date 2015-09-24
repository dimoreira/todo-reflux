module.exports = {

	entry: './src/main.jsx',
	output: {
		path: 'public/javascripts',
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'jsx'
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			}
		]
	}

};
