const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        hot: false,
        port: 9000,
        open: true ,
        devMiddleware: {
            writeToDisk: true,
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                exclude: /bootstrap\.min\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    "css-loader"
                ],
            },
            {
                test: /bootstrap\.min\.css$/i,
                use : [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    "rtlcss-loader" 
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "./images/[name][ext]"
                }
              },
              {
                test: /\.(eot|svg|woff|woff2|ttf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "./fonts/[name][ext]"
                }
              },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new HtmlWebpackPlugin({
            filename: "product.html",
            template: "./src/product.html"
        }),
        new HtmlWebpackPlugin({
            filename: "chekout.html",
            template: "./src/chekout.html"
        }),
        new HtmlWebpackPlugin({
            filename: "payment.html",
            template: "./src/payment.html"
        }),
        new HtmlWebpackPlugin({
            filename: "search.html",
            template: "./src/search.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/style.css"
        }),
        new CssMinimizerPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [
            `...`, // يستخدم الإعدادات الافتراضية
            new CssMinimizerPlugin(),
        ],
    },
};