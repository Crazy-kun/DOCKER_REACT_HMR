import compression from "compression";
import express from "express";
import router from "./router";

console.log("NODE_ENV: ", process.env.NODE_ENV);

const port = 3000;
const app = express();

app.set("json spaces", 2);
app.use(compression());
app.use(express.static("public"));

//HMR
if (process.env.NODE_ENV == "development") {
    const webpack = require("webpack");
    const webpackConfig = require("../webpack.config.js");
    const compiler = webpack(webpackConfig);

    app.use(
        require("webpack-dev-middleware")(compiler, {
            noInfo: true,
            publicPath: webpackConfig.output.publicPath,
            stats: { colors: true }
        })
    );

    app.use(require("webpack-hot-middleware")(compiler));
}

app.use(router);

app.listen(port, () => {
    console.log(`App listening`);
});
