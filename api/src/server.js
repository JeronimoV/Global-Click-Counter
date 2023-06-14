const { conn } = require("./database");
const express = require("express");
const server = express();
const cors = require("cors");
const routes = require("./routes/index");
const { Click } = require("./database");

server.use(express.json());
server.use(cors());
server.use("/", routes);

conn.sync({ force: false }).then(() => {
  const actualServer = server.listen(3001, () => {
    console.log("Server Started");
  });
  const io = require("socket.io")(actualServer, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    socket.on("click", async () => {
      const actualClicks = await Click.findAll();
      console.log(actualClicks);
      const clickAmount = actualClicks[0].amount + 1;
      const updatedClicks = await actualClicks[0].update({
        amount: clickAmount,
      });
      console.log(updatedClicks);
      io.emit("newClick", updatedClicks);
    });
  });
});
