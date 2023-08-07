const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300, // Automatically remove the document after 5 minutes (300 seconds)
  },
});

const OTP = mongoose.model('OTP', otpSchema);

module.exports = OTP;
