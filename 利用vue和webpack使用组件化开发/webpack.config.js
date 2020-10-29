/*
  开发环境配置：能让代码运行
    运行项目指令：
      webpack 会将打包结果输出出去
      npx webpack-dev-server 只会在内存中编译打包，没有输出
*/

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // loader的配置
      {
        // 处理css资源
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      // 处理vue文件
      {
        test:/\.vue$/,
        use: ['vue-loader']
      }
    ]
  },

  // 使vue可以使用
  resolve: {
    alias:{
    'vue$': 'vue/dist/vue.esm.js'
    }
    
    },
  plugins: [
    // plugins的配置
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // 导入vueloader
    new VueLoaderPlugin()
  ],
  mode: 'development'
};
