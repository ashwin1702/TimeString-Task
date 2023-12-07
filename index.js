const sequelize = require("./util/connection");
const express = require("express");
const app = express();
const RouterCmp = require("./routes/RouterCmp");

const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/info", RouterCmp);



sequelize.sync().then(() => {
  app.listen("7000", () => {
    console.log("Server started on port 7000");
  });
});
