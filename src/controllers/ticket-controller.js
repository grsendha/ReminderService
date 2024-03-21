const TicketService = require("../services/email-service");

const create = async (req, res) => {
  try {
    const response = await TicketService.createNotification(req.body);
    return res.status(201).json({
      data: response,
      message: "Successfully registered an email",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      err: error,
      message: "Failed registered an email",
    });
  }
};

module.exports = { create };
