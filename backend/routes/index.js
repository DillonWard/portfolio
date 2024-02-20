const router = require("express").Router();

router.use("/experiences", require("./experiences"));
router.use("/projects", require("./projects"));

module.exports = router;
