const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const { sendBasicEmail } = require("./services/email-service");
const jobs = require("./utils/job");

const setupServer = () => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  const TicketController = require("./controllers/ticket-controller");

  app.listen(PORT, () => {
    console.log("server started at ", PORT);
    app.post("/api/v1/tickets", TicketController.create);
    jobs();
    // const msgBody = `
    // This is First
    // This is second
    // This is third
    // `;
    // sendBasicEmail(
    //   "support@gyan.com",
    //   "ranjangyan7002@gmail.com",
    //   "This is a demo",
    //   msgBody
    // );
  });
};

setupServer();
