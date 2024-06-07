const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connect = require("./Config/database");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const router = require("./Routes/index");
const cors = require("cors");
const morgan = require("morgan");
function start() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cors({origin: "http://localhost:5173"}));

  app.use("/api", router);
  app.listen(PORT, async (req, res) => {
    console.log(PORT);
    console.log(`listening on the PORT ${PORT}`);
    await connect();
  });
}

start();
