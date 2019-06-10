const HTMLWebpackPlugin = require("html-webpack-plugin");
const ExtructCssChunksPlugin = require("extract-css-chunks-webpack-plugin");

const htmlWebpackPlugin = new HTMLWebpackPlugin({
    template: "./dev/index.html",
    filename: "./index.html"
});
const extructCssChunksPlugin = new ExtructCssChunksPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
});

const plugins = [ htmlWebpackPlugin, extructCssChunksPlugin ];

module.exports = plugins;