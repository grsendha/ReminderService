const express = require("express");
const bodyParser = require("body-parser");
const TicketController = require("./controllers/ticket-controller");
const jobs = require("./utils/job");
const { sendBasicEmail } = require("./services/email-service");
const { PORT } = require("./config/serverConfig");
// const { createChannel } = require("./utils/messageQueue");

const setupServer = async () => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // const channel = await createChannel();

  app.listen(PORT, () => {
    console.log("server started at ", PORT);
    app.post("/api/v1/tickets", TicketController.create);
    jobs();
  });
};

setupServer();
