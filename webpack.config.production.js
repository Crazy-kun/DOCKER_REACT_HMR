const path = require("path");

module.exports = {
    mode: "production",
    entry: {
        app: ["./frontend/index.tsx"],
        vendor: ["react", "react-dom"]
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "js/[name].bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }
        ]
    }
};
