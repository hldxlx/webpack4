// webpack 是node写出来的 node的写法
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
console.log(path.resolve('dist'));
module.exports = {
    devServer: {// 开发服务器的配置
        port: 3000,
        progress: true,
        contentBase: './dist',
        compress: true
    },
    mode: 'production',//模式 默认两种 production development
    entry: './src/index.js', // 入口
    output: {
        filename: 'bundle.[hash:8].js', // 打包后的文件名
        path: path.resolve(__dirname, 'dist') // 路径必须是一个绝对路径
    },
    plugins: [// 数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename:'main.css'
        })
    ],
    module: {//模块
        // loader
        rules: [//规则 css-loader 解析@import这种语法的
            // style-loader   他是把css插到head的标签中
            // loader的特点 希望单一
            // loader的用法 字符串只用一个loader
            //多个loader需要[]
            //loader的顺序 默认是从右向左折行 从下到上折行
            //loader还可以写成 对象方式
            {
                test: /\.css$/,
                use: [
                  {
                    loader: 'style-loader'
                  },
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    'css-loader',// @import 解析路径
                    'less-loader'//把less -> css
                ]
            }
        ]
    }
}