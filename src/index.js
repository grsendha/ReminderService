const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const { sendBasicEmail } = require("./services/email-service");

const setupServer = () => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.listen(PORT, () => {
    console.log("server started at ", PORT);
    const msgBody = `
    This is First
    This is second
    This is third
    `;
    sendBasicEmail(
      "support@gyan.com",
      "ranjangyan7002@gmail.com",
      "This is a demo",
      msgBody
    );
  });
};

setupServer();
