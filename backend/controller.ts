import { Request, Response } from "express";

const path = require("path");

class Controller {
    index(req: Request, res: Response) {
        res.sendFile(path.resolve(__dirname, "../public", "index.html"));
    }

    test(req: Request, res: Response) {
        res.json({ response: "TEST" });
    }
}

export default new Controller();
