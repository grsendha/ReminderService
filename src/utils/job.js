const cron = require("node-cron");
const { fetchPendingEmail } = require("../services/email-service");
const emailService = require("../services/email-service");
const sender = require("../config/emailConfig");

const setupJobs = () => {
  cron.schedule("*/1 * * * *", async () => {
    const response = await fetchPendingEmail();
    response.forEach((email) => {
      sender.sendMail(
        {
          from: "ReminderService@airline.com",
          to: email.recipientEmail,
          subject: email.subject,
          text: email.content,
        },
        async (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
            await emailService.updateTicket(email.id, {
              status: "SUCCESS",
            });
          }
        }
      );
    });

    response.console.log("ID is", response);
  });
};

module.exports = setupJobs;
