// CommonChunks插件
//Common Chunks 插件的作用就是提取代码中的公共模块，然后将公共模块打包到一个独立的文件中去，以便在其它的入口和模块中使用。
var webpack = require('webpack');
var CommonsChunkPlugin= require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin= require("extract-text-webpack-plugin");
module.exports = {
	entry: {
		main1: './main',
		main2: './main2'
	},
	output:{
		//绝对路径，生成的bundle.js 的路径
		path: __dirname + "/dist",
		// webpack服务 提供的访问的文件夹
		publicPath: '/dist',
		filename: 'bundle.[name].js'
	},
	module:{
		loaders:[
			{
				test: /\.css$/,
				// 使用插件=> 作用是把style中的css样式抽离出来
				loader:ExtractTextPlugin.extract('style-loader','css-loader')
			},
			{
				test: /\.less$/,
				loader:'style-loader!css-loader!less-loader'
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader:'url-loader?limit=10000&name=build/[name].[ext]'
			}
		]
	},
	plugins:[
		// 将main1(entry name 属性名) 以及 main2  公用的代码抽离 打包到common.js
		new  webpack.optimize.CommonsChunkPlugin('common.js', ['main1', 'main2']),
		// 将style中的css样式加入到styles.css 中
		new ExtractTextPlugin('styles.css')
	]
}