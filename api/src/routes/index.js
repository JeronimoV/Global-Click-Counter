const express = require("express");
const server = express();
const { Click } = require("../database");

server.get("/", async (req, res) => {
  try {
    const actualClicks = await Click.findAll();
    res.status(200).json(actualClicks);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

server.post("/create", async (req, res) => {
  try {
    await Click.create({
      amount: 0,
    });
    res.status(200).json("Click Created");
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

module.exports = server;
