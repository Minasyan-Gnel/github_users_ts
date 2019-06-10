const path = require("path");
const plugins = require("./webpack.plugins");
const ExtructCssChunksPlugin = require("extract-css-chunks-webpack-plugin");

module.exports = {
    entry: "./dev/index.ts",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].bundel.js"
    },
    mode: process.env.NODE_ENV,
    devtool: "inline-sorce-map",
    devServer: {
        historyApiFallback: true,
        port: 3000
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    optimization: {
        minimize: process.env.NODE_ENV === "production"
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: "html-loader"
            },
            {
                test: /\.(css)$/,
                use: [ExtructCssChunksPlugin.loader, "css-loader"],
                include: path.join(__dirname, "src")
            },
            {
                test: /\.(ts)?$/,
                use: "ts-loader"
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: "file-loader?outputPath=images/",
                include: path.join(__dirname, "src")
            }   
        ]
    },
    plugins
}