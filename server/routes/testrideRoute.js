const express = require("express");
const {
  bookTestRide,
  getallbookTestRide,
  deleteatestride,
  updateRemark,
} = require("../controller/testridectrl");
const {
  authMiddleware,
  isAdmin,
  isSuper,
} = require("../middlewares/authMiddleware");

const router = express.Router();
router.get("/", getallbookTestRide);
router.post("/add", bookTestRide);
router.post("/del",authMiddleware,isAdmin,deleteatestride);
router.post("/update",updateRemark);
module.exports = router;
