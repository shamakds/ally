const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const isProduction = process.argv.indexOf('-p') >= 0;
const sourcePath = path.join(__dirname, './src');

module.exports = {
    mode: "development",
    context: sourcePath,
    entry: {
        main: './index.tsx',
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-dom',
            'react-router-redux',
            'redux'
        ]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            sources: path.resolve('./src/sources.ts')
        },
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules'),
        ]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                use: isProduction
                    ? 'awesome-typescript-loader?module=es6'
                    : [
                        'awesome-typescript-loader'
                    ]
            },
            { test: /\.html$/, loader: "html-loader" },
            { test: /\.(png|jpe?g|ico)(\?v=.+)?$/, use: 'file-loader?name=assets/[name].[hash].[ext]' },
            { test: /\.css$/, use: [
                MiniCssExtractPlugin.loader, "css-loader",
                {
                    loader: 'postcss-loader',
                    options: { ident: 'postcss' }
                }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            favicon: './assets/images/favicon.jpg',
            inject: true,
            template: "./index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    optimization: {
        runtimeChunk: 'single'
    }
};
