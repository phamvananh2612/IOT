const express = require("express");
const router = express.Router();
const controller = require("../controllers/sensorlogController");

router.get("/", controller.log);

module.exports = router;