const express = require("express");
require('dotenv').config();
const router = require("./routes/indexRouter");
const app = express();
const port = process.env.PORT;
console.log(port);

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));

router(app);

app.listen(port, () => {
  console.log(`Web đang chạy trên cổng ${port}`);
})