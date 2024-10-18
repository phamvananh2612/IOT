const dashboardRouter = require("./dashboardRouter");
const sensorlogRouter = require("./sensorlogRouter");

module.exports = (app) => {
  app.use("/dashboard", dashboardRouter);
  app.use("/sensor-log", sensorlogRouter);
};