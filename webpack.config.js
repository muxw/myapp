var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './public/js/a2.js',
	node:{
		fs:"empty"
	},
	output:{
		path: path.join(__dirname,'/public/js'),
		filename:'bundle.js'
	},
	devtool:'eval-source-map',
	module: {
		loaders: [
			{
				test:/\.json$/,
				loader:'json-loader',
			},
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:'babel-loader',
			},
			{	
				test:/\.css$/,
				loader: ExtractTextPlugin.extract({fallback:"style-loader",use:"css-loader"})
			},
			{
				test:/\.vue$/,
				loader:'vue-loader'
			}
		]
	},
	devServer:{
		contentBase: "./public",
		colors: true,
		historyApiFallback:'true',
		inline:true
	},
	plugins:[
		/*new HtmlWebpackPlugin({
			template:__dirname+"/views/index.html",
			filename:__dirname+'/views/indexH.html'
		})*/
	    
    	new webpack.optimize.UglifyJsPlugin(),
    	new ExtractTextPlugin("style.css")
	]

}