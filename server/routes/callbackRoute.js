const express = require("express");
const {
  bookCallback,
  getallCallback,
  deleteCallback,updateRemarkCall
} = require("../controller/callbackctrl");
const {
  authMiddleware,
  isAdmin,
  isSuper,
} = require("../middlewares/authMiddleware");

const router = express.Router();
router.post("/add", bookCallback);
router.get("/", getallCallback);
router.post("/del",authMiddleware,isAdmin, deleteCallback);
router.post("/update",updateRemarkCall);


module.exports = router;
