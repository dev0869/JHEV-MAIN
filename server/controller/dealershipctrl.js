const asyncHandle = require("express-async-handler");
const Dealer = require("../models/dealershipModel");
const requestDealership = asyncHandle(async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  const test = await Dealer.findOne({ email });
  const dealers = await Dealer.find();
  let number = dealers.length + 1 || 1;
  let numberStr = String(number);
  let length = numberStr.length;

  // Add leading zeros based on the length of the string representation
  if (length === 1) {
    formattedNumber = "000" + numberStr;
  } else if (length === 2) {
    formattedNumber = "00" + numberStr;
  } else if (length === 3) {
    formattedNumber = "0" + numberStr;
  } else {
    formattedNumber = numberStr;
  }
  const bookingid = `JHEVDR${formattedNumber}`;
  const final = {
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    age: req.body.age,
    adress: req.body.adress,
    state: req.body.state,
    city: req.body.city,
    pincode: req.body.pincode,
    occupation: req.body.occupation,
    currentBusiness: req.body.currentBusiness,
    turnOver: req.body.turnOver,
    propertyDetails: req.body.propertyDetails,
    dealershipExperience: req.body.dealershipExperience,
    minimumInvestment: req.body.minimumInvestment,
    message: req.body.messagefield,
    bookingid,
  };
  if (test) {
    if (test.status === "pending") {
      res.json("You have already submit request for test bike please wait!");
    } else {
      res.json("error occured");
      //   res.send(400);
    }
  } else {
    try {
      const newRide = await Dealer.create(final);
      const resp = {
        sucess: "Your DealerShip Request is Submitted Sucessfully",
        bookingid: newRide.bookingid,
      };
      res.json(resp);
    } catch (error) {
      if (error.message.includes("duplicate")) {
        res.json(
          `Entered ${
            error.message.split("{")[1].split(":")[0]
          } is already registered`
        );
      } else {
        res.json(error.message);
      }
    }
  }
});

const getalldealarship = asyncHandle(async (req, res) => {
  const test = await Dealer.find();
  const data = [];
  for (let i = 0; i < test.length; i++) {
    if (test[i].status !== "completed") {
      data.push(test[i]);
    }
  }
  res.json(data);
});
const deleteaDelarship = asyncHandle(async (req, res) => {
  if (req.body._id) {
    const { _id } = req.body;
    try {
      await Dealer.findByIdAndDelete({ _id });
      res.json("Deleted Sucessfully");
    } catch (error) {
      res.json(error.message);
    }
  } else res.json("invalid Operation");
});

module.exports = { requestDealership, getalldealarship, deleteaDelarship };
