import controller from "./controller";

const router = require("express").Router();

router.get("/test", controller.test);

router.get("*", controller.index);

export default router;
