const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    devtool: "none", //source-map // none
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/[name].[hash].' + process.env.NODE_ENV + '.js',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.join(__dirname, './src'),
        }
    },
    devServer: {
        contentBase: "./dist",
        hot: true,
        port: 8080,
        //显示打包编译进度
        progress: true,
        compress: true,
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.vue$/,
                use: ["vue-loader"],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "home",
            template: "./src/views/home/index.html",
            minify: false
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({　　 filename: "./style/[name].[hash]." + process.env.NODE_ENV + ".min.css"　　 })
    ]
}