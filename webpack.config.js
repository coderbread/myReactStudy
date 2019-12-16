const path = require('path')
const HtmlwebpacjPlugin = require('html-webpack-plugin')

//创建插件的实例对象
const htmlWebpackPlugin = new HtmlwebpacjPlugin({
  template: path.join(__dirname, './src/index.html'),
  firename: 'index.html' //自定义内存中的首页名称
})

//向外暴露一个打包的配置对象；
module.exports = {    // node语法
  mode: 'development', // development / production
  plugins: [
    htmlWebpackPlugin,
  ],
  module: {
    rules: [//编译规则
      //test：编译的文件格式  use：使用的loader工具  exclude：排除项
      {test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/},
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],//表示该类型的文件后缀可以省略
    alias: {//设置别名
      '@': path.join(__dirname, '/src')
    }
  }
}   