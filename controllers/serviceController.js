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

const serviceList = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Error fetching service list" });
  }
}

const updateService = async (req, res) => {
  try {
    const updated = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Failed to update service" });
  }
}

const deleteService = async (req, res) => {
  try {
    const updated = await Service.findByIdAndDelete(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Failed to update service" });
  }
}

module.exports = { bookService, serviceList, updateService, deleteService };
