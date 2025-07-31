const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  uniqueNumber: Number,
  fullName: String,
  address: String,
  mobileNumber: String,
  problemSummary: String,
  acType: String,
  paymentMethod: String,
  profit: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Service", serviceSchema);
