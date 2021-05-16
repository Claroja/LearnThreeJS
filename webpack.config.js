const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//插件是个类
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({// 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
      template: './src/index.html'// 可以自己指定一个模板文件,复制 './src/index.html'文件,并自动引入打包输出的所有资源（JS/CSS）
    })
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: true
  }
}