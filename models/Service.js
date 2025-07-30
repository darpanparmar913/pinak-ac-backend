const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: String,
  address: String,
  mobile: String,
  problem: String,
  acType: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Service", serviceSchema);
