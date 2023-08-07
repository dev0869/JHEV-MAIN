const mongoose = require("mongoose");
const DealshipSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      unique: true,
    },
    number: {
      type: String,
      unique: true,
    },
    bookingid: {
      type: String,
      unique: true,
    },
    age: {
      type: String,
    },
    adress: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    pincode: {
      type: String,
    },
    occupation: {
      type: String,
    },
    currentBusiness: {
      type: String,
    },
    turnOver: {
      type: String,
    },
    propertyDetails: {
      type: String,
    },
    propertySize: {
      type: String,
    },
    dealershipExperience: {
      type: String,
    },
    minimumInvestment: {
      type: String,
    },
    message: {
      type: String,
    },
    date:{
      type:Date
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DealshipRequest", DealshipSchema);
