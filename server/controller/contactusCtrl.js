const asyncHandle = require("express-async-handler");
const ContactUs = require("../models/contactUsModel");
const addContactus = asyncHandle(async (req, res) => {
  console.log(req.body)
  try { await ContactUs.create(req.body);
    const resp = {
      success: "You request is submitted sucessfully",     
    };
    res.json(resp);
  } catch (error) {
    if (error.message.includes("duplicate")) {
      res.json({
        error: `Entered ${
          error.message.split("{")[1].split(":")[0]
        } is already registered`,
      });
    } else {
      res.json({ error: error.message });
    }
  }
});
const getallContactUs = asyncHandle(async (req, res) => {
  const test = await ContactUs.find();
  const data = [];
  for (let i = 0; i < test.length; i++) {
    if (test[i].status !== "completed") {
      data.push(test[i]);
    }
  }
  res.json(data);
});

const deleteContact = asyncHandle(async(req,res)=>{
  console.log(req.body)
  if(req.body._id){
    const {_id} = req.body
    try {
      await ContactUs.findByIdAndDelete({_id})
      res.json("Deleted Sucessfully")
    } catch (error) {
      res.json(error.message)
    }
  }else(
    res.json("invalid Operation")
  )
})

const updateRemarkContact = asyncHandle(async(req,res)=>{
  if(req.body._id){
    const {_id} = req.body
    try {
      await ContactUs.findByIdAndUpdate({_id},req.body)
      res.json("Remark Updated Sucessfully")
    } catch (error) {
      res.json(error.message)
    }
  }else(
    res.json("invalid Operation")
  )
})


module.exports = { addContactus,getallContactUs,deleteContact,updateRemarkContact};
