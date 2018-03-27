/**
 * webpack 配置文件
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * 获取绝对路径
 * @param {String} name
 */
function getPath(name){
	return path.resolve(__dirname, name);
}

module.exports = {
	entry: {
		app: [getPath('src/main.js')],
		common: ['vue', 'jquery', 'vue-router', 'element-ui']
	},
	devServer: {
		contentBase: getPath('dist'),
		compress: true,
		hot: true,
		open: true,
		hotOnly: true,
		host: '192.168.1.3',
		progress: true,
		port: 8088,
		stats: "errors-only"
	},
	resolve: {
		extensions: ['.js','.vue'],
		alias: {
			vue: 'vue/dist/vue.esm.js',
			views: getPath('src/views'),
			components: getPath('src/components'),
			bootstrap: 'bootstrap/dist'
		}
	},
	module: {
		rules:[{
			test: /\.(js|vue)$/,
			exclude: /node_modules/,
			use: ['babel-loader']
		},{
			test: /\.(js|vue)$/, // eslint构建检查配置
			loader: 'eslint-loader',
			enforce: "pre",// 设置eslint 构建前检查
			include: getPath('src'),
			options: {
				formatter: require('eslint-friendly-formatter')
			}
		},{
			test: /\.vue$/,// 加载vue文件
			use: ['vue-loader']
		},{
			test: /\.(ttf|woff|svg|eot|woff2|jpg)$/,// 字体
			use: ['file-loader']
		},{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({ // 抽离css + 自动添加浏览器前缀
				fallback: 'style-loader',
				use: ['css-loader', 'postcss-loader']
			})
		},{
			test: /\.less$/,
			use: ['css-loader', 'postcss-loader', 'less-loader']
		}]
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({// 抽离公共代码
			name: 'common'
		}),
		new HtmlWebpackPlugin({ // html模板生成
			template: getPath('index.html')
		}),
		new webpack.HotModuleReplacementPlugin(), // 热替换模块
		new ExtractTextPlugin('[name].[hash].css')// 公共css
	],
	output: {
		filename: '[name].bandle.[hash].js',
		chunkFilename: '[id].chunkbandle.[hash].js',//分支名称
		path: getPath('dist'),
		publicPath: '/'
	}
};
