const express = require("express");
const router = express.Router();
const controller = require("../controllers/dashboardContoller");

router.get("/", controller.dashboard);

module.exports = router;