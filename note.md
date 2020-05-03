
## webpack安装
webpack webpack-cli -D
yarn init -y
yarn add webpack webpack-cli -D
-D 表示是开发依赖 上线时不需要

## webpack可以进行0配置
- 打包工具 -> 输出后的结果 （js模块）
- 打包 （支持我们的js的模块化）

## 手动配置webpack
- 默认配置文件的名字 webpack.config.js

npx webpack --config webpack.config.my.js

yarn add webpack-dev-server -D
npx webpack-dev-server 
yarn add html-webpack-plugin -D

yarn add css-loader style-loader -D
yarn add less less-loader -D
yarn add mini-css-extract-plugin -D
yarn add postcss-loader autoprefixer -D
yarn add optimize-css-assets-webpack-plugin -D