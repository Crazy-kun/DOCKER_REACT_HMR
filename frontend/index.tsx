import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

declare let module: any;

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root") as HTMLElement
);

if (module.hot) {
    module.hot.accept();
}
