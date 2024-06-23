const express = require("express");
const app = express();
const connect = require("./Config/database");

const router = require("./Routes/index");
const cors = require("cors");
const {PORT} = require("./Config/server");
function start() {
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  app.use(cors({origin: "http://localhost:5173"}));

  app.use("/api", router);
  app.listen(PORT, async (req, res) => {
    console.log(`listening on the PORT ${PORT}`);
    await connect();
  });
}

start();
