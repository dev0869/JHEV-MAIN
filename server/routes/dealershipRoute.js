const express = require("express");
const {
  requestDealership,
  getalldealarship,
  deleteaDelarship,
} = require("../controller/dealershipctrl");
const {
  authMiddleware,
  isAdmin,
  isSuper,
} = require("../middlewares/authMiddleware");

const router = express.Router();
router.get("/", getalldealarship);
router.post("/add", requestDealership);
router.post("/del", authMiddleware, isAdmin, deleteaDelarship);
module.exports = router;
