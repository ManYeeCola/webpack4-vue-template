const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    devtool:"source-map",//source-map
    entry:"./main.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"js/[name].js"
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.join(__dirname, './src'),
      }
    },
    devServer:{
        contentBase:"./dist",
        hot:true,
        compress:true,
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test:/\.vue$/,
                use:["vue-loader"],
            },
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:"home",
            template:"./index.html",
            minify: false
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
    　　    filename: "./style/[name].css"
    　　})
    ]
}
