const asyncHandle = require("express-async-handler");
const Calls = require("../models/callBackModel");
const bookCallback = asyncHandle(async (req, res) => {
  const { email } = req.body;
  const test = await Calls.findOne({ email });
  const call = await Calls.find();
  let number = call.length + 1 || 1;
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
  const bookingid = `JHEVCB${formattedNumber}`;
  const final = {
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    bike: req.body.bike,
    state: req.body.state,
    city: req.body.city,
    bookingid,
  };
  if (test) {
    if (test.status === "pending") {
      res.json("You have already submit request for callback please wait!");
    } else {
      res.json("error occured");
      //   res.send(400);
    }
  } else {
    try {
      const newcall = await Calls.create(final);
      const resp = {
        sucess: "Your Callback Request is Submitted Sucessfully",
        bookingid: newcall.bookingid,
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

const getallCallback = asyncHandle(async (req, res) => {
  const call = await Calls.find();
  const data = [];
  for (let i = 0; i < call.length; i++) {
    if (call[i].status !== "completed") {
      data.push(call[i]);
    }
  }
  res.json(data);
});

const deleteCallback = asyncHandle(async (req, res) => {
  if (req.body._id) {
    const { _id } = req.body;
    try {
      await Calls.findByIdAndDelete({ _id });
      res.json("Deleted Sucessfully");
    } catch (error) {
      res.json(error.message);
    }
  } else res.json("invalid Operation");
});
const updateRemarkCall = asyncHandle(async(req,res)=>{
  if(req.body._id){
    const {_id} = req.body
    const final = {
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      bike: req.body.bike,
      state: req.body.state,
      city: req.body.city,
      status:req.body.status,
      bookingid:req.body.bookingid
    };
    try {
      await Calls.findByIdAndUpdate({_id},final)
      res.json("Remark Updated Sucessfully")
    } catch (error) {
      res.json(error.message)
    }
  }else(
    res.json("invalid Operation")
  )
})

module.exports = { bookCallback, getallCallback, deleteCallback,updateRemarkCall };
