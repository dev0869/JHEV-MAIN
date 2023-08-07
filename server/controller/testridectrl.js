const asyncHandle = require("express-async-handler");
const TestRide = require("../models/textRideModel");
const bookTestRide = asyncHandle(async (req, res) => {
  const { email } = req.body;
  const test = await TestRide.findOne({ email });
  const testride = await TestRide.find();
  let number = testride.length +1 || 1;
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
  const bookingid = `JHEVTM${formattedNumber}`;
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
      res.json("You already submit request for test bike please wait!");
    } else {
      res.json("error occured");
      //   res.send(400);
    }
  } else {
    try {
      const newRide = await TestRide.create(final);
      const resp = {
        sucess: "Your Booking Request is Submitted Sucessfully",
        bookingid: newRide.bookingid
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

const getallbookTestRide = asyncHandle(async (req, res) => {
  const test = await TestRide.find();
  const data = [];
  for (let i = 0; i < test.length; i++) {
    if (test[i].status !== "completed") {
      data.push(test[i]);
    }
  }
  res.json(data);
});

const deleteatestride = asyncHandle(async(req,res)=>{
  console.log(req.body)
  if(req.body._id){
    const {_id} = req.body
    try {
      await TestRide.findByIdAndDelete({_id})
      res.json("Deleted Sucessfully")
    } catch (error) {
      res.json(error.message)
    }
  }else(
    res.json("invalid Operation")
  )
})

const updateRemark = asyncHandle(async(req,res)=>{
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
      await TestRide.findByIdAndUpdate({_id},final)
      res.json("Remark Updated Sucessfully")
    } catch (error) {
      res.json(error.message)
    }
  }else(
    res.json("invalid Operation")
  )
})


module.exports = { bookTestRide, getallbookTestRide ,deleteatestride,updateRemark};
