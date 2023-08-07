const express = require("express");
const { addContactus,getallContactUs,deleteContact,updateRemarkContact } = require("../controller/contactusCtrl");

const router = express.Router();
router.get("/", getallContactUs);
router.post("/add", addContactus);
router.post("/update", updateRemarkContact);
router.post("/del", deleteContact);
module.exports = router;
