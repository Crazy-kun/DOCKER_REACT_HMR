const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: {
        app: ["./frontend/index.tsx", "webpack-hot-middleware/client"],
        vendor: ["react", "react-dom"]
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "js/[name].bundle.js",
    },
    devtool: "cheap-module-eval-source-map",
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".css"]
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader: "ts-loader"
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};