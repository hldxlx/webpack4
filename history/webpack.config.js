// webpack 是node写出来的 node的写法
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin')
console.log(path.resolve('dist'));
module.exports = {
    mode:'development',//模式 默认两种 production development
    entry:'./src/index.js', // 入口
    output:{
        filename:'bundle.[hash:8].js', // 打包后的文件名
        path:path.resolve(__dirname,'dist') // 路径必须是一个绝对路径
    },
    plugins:[// 数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            minify:{
                removeAttributeQuotes:true,
                collapseWhitespace:true
            },
            hash:true
        })
    ]
}