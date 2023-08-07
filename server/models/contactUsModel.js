const mongoose = require("mongoose");
const contactusShema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    message:{
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "No Remarks",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contactus", contactusShema);
