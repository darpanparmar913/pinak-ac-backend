const Service = require("../models/Service");
const sendEmail = require("../utils/sendEmail");

const bookService = async (req, res) => {

  console.log("req.body ::  > ", req.body)

  try {
    const service = await Service.create(req.body);
    await sendEmail(req.body);
    res.status(201).json({ message: "Service booked successfully" });
  } catch (error) {
    console.error("Error booking service:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { bookService };
