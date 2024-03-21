const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve("../.env") });

module.exports = {
  PORT: process.env.PORT,
  EMAIL_ID: process.env.EMAIL_ID,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
};
