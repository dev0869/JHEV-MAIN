const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  console.log(req?.headers.authorization)

  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (error) {
      res.json("Not Authorized token expired, Please Login again");
    }
  } else {
    res.json(" There is no token attached to header");
  }
});
const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;

  const adminUser = await User.findOne({ email });

  if (adminUser.role !== "admin") {
    res.json("You are not an admin");
  } else {
    req.user = req.user;
    next();
  }
});
const isSuper = asyncHandler(async (req, res, next) => {
  const { email } = req.user;

  const adminUser = await User.findOne({ email });
  if (adminUser.super === true) {
    req.user = req.user;
    next();
  } else {
    res.json("You are not Super admin");
  }
});
module.exports = { authMiddleware, isAdmin, isSuper };
