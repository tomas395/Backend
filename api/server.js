const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authenticate = require("../auth/authenticate-middleware");
const trollRouter = require("../troll-router/troll-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api", authenticate, trollRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;