const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");
const validateMongoDbId = require("../utils/validateMongodbId");
const { generateRefreshToken } = require("../config/refreshtoken");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("./emailCtrl");

// Create a User ----------------------------------------------
const checkSignup = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const mobile = req.body.mobile;
  console.log(req.body);
  const findByEmail = await User.findOne({ email });
  const findByMobile = await User.findOne({ mobile });
  if (findByEmail) {
    res.json({ error: "This email is already in used !" });
  } else if (findByMobile) {
    res.json({ error: "This mobile number is already in used !" });
  } else if (email && mobile) {
    res.json({ success: true });
  } else {
    res.json({ error: "Invalid Task" });
  }
});

const verifyUser = asyncHandler(async (req, res) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded?.id);
        req.user = user;
        res.json({success:true})
      }
    } catch (error) {
      res.json("Not Authorized token expired, Please Login again");
    }
  } else {
    res.json(" There is no token attached to header");
  }
});

const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  console.log(req.body);
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (error) {
      if (error.message.includes("duplicate")) {
        res.json(
          `Entered ${
            error.message.split("{")[1].split(":")[0]
          } no. is already in used`
        );
      } else {
        res.json(error.message);
      }
    }
  } else {
    res.json("You are already registered with us !");
  }
});

const isAdminuser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  const adminUser = await User.findOne({ email });
  if (adminUser.role !== "admin") {
    throw new Error("You are not an admin");
  } else {
    res.json({ admin: true });
  }
});

// Login a user
const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // check if user exists or not
  const findUser = await User.findOne({ email });
  if (findUser) {
    if (findUser && (await findUser.isPasswordMatched(password))) {
      const refreshToken = await generateRefreshToken(findUser?._id);
      if (findUser.isBlocked === false) {
        const updateuser = await User.findByIdAndUpdate(
          findUser.id,
          {
            refreshToken: refreshToken,
          },
          { new: true }
        );
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: 72 * 60 * 60 * 1000,
        });

        res.json({
          _id: findUser?._id,
          name: findUser?.name,
          email: findUser?.email,
          mobile: findUser?.mobile,
          token: generateToken(findUser?._id),
          role: findUser?.role,
          cart: findUser?.cart,
          address: findUser?.address,
          super: findUser?.super,
        });
      } else {
        res.send({ message: "you are block by  Super Admin" });
      }
    } else {
      res.send("Invalid Credentials");
    }
  } else {
    res.json("User not Found");
  }
});

// admin login

const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // check if user exists or not
  const findAdmin = await User.findOne({ email });
  if (findAdmin.role !== "admin") throw new Error("Not Authorised");
  if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findAdmin?._id);
    const updateuser = await User.findByIdAndUpdate(
      findAdmin.id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findAdmin?._id,
      firstname: findAdmin?.firstname,
      lastname: findAdmin?.lastname,
      email: findAdmin?.email,
      mobile: findAdmin?.mobile,
      token: generateToken(findAdmin?._id),
      super: findAdmin,
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

// handle refresh token

const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) throw new Error(" No Refresh token present in db or not matched");
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err || user.id !== decoded.id) {
      throw new Error("There is something wrong with refresh token");
    }
    const accessToken = generateToken(user?._id);
    res.json({ accessToken });
  });
});

// logout functionality

const logout = asyncHandler(async (req, res) => {
  if (!req.cookies?.refreshToken)
    throw new Error("No Refresh Token in Cookies");
  const refreshToken = req.cookies.refreshToken;
  const user = await User.findOne({ refreshToken });
  console.log(user);
  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    return res.sendStatus(204); // forbidden
  }
  await User.findOneAndUpdate(refreshToken, {
    refreshToken: "",
  });
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  res.sendStatus(204); // forbidden
});

// Update a user

const updatedUser = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);

  try {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        firstname: req?.body?.firstname,
        lastname: req?.body?.lastname,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      {
        new: true,
      }
    );
    res.json(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
});
const updateRole = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { role } = req.body;
  console.log(role);
  validateMongoDbId(id);

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        role: role,
      },
      {
        new: true,
      }
    );
    res.json(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
});

// save user Address

// Get all users
const getallUser = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});

// Get a single user

const getaUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const getaUser = await User.findById(id);
    res.json({
      getaUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// Get a single user

const deleteaUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const deleteaUser = await User.findByIdAndDelete(id);
    res.json({
      deleteaUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  validateMongoDbId(id);

  try {
    const blockusr = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: true,
      },
      {
        new: true,
      }
    );
    res.json(blockusr);
  } catch (error) {
    throw new Error(error);
  }
});

const unblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  validateMongoDbId(id);

  try {
    const unblock = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: false,
      },
      {
        new: true,
      }
    );
    res.json({
      message: "User UnBlocked",
    });
  } catch (error) {
    throw new Error(error);
  }
});
const updatePassword = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  validateMongoDbId(_id);
  const user = await User.findById(_id);
  if (password) {
    user.password = password;
    const updatedPassword = await user.save();
    res.json(updatedPassword);
  } else {
    res.json(user);
  }
});

//Reset The Password
const forgetPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) res.json({ error: "Email is not Registered with us !" });
  try {
    const token = await user.createPasswordResetToken();
    console.log(token);
    await user.save();
    const sendData = `<h1 style=\"color: #333; font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; margin-bottom: 16px;\">Password Reset<\/h1>\r\n<p style=\"color: #666; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; margin-bottom: 8px;\">Hi there,<\/p>\r\n<p style=\"color: #666; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; margin-bottom: 16px;\">We received a request to reset your password. Please click the link below to reset your password:<\/p>\r\n<p style=\"margin-bottom: 16px;\"><a href='https://jhevmotors.com/reset-password/${token}' style=\"background-color: #007bff; border-radius: 4px; color: #fff; display: inline-block; font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; padding: 10px 16px; text-decoration: none;\">Reset Password<\/a><\/p>\r\n<p style=\"color: #666; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; margin-bottom: 16px;\">If you did not request a password reset, you can ignore this email and your password will not be changed.<\/p>\r\n<p style=\"color: #666; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5;\">Thank you,<\/p>\r\n<p style=\"color: #666; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; margin-bottom: 0;\">The Example Team<\/p>\r\n`;
    const data = {
      to: email,
      subject: "Password Reset Link from Jhev Motors",
      html: sendData,
    };
    sendEmail(data);
    res.json(token);
  } catch (err) {}
});
const checkresetPasswordUser = asyncHandler(async (req, res) => {
  const token = req.params.token;
  const hashToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashToken,
    passwordResetExpire: {
      $gt: Date.now(),
    },
  });

  if (!user) res.json({ error: "Token  Expired Please Try again" });
  res.json(user.email);
});

const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;

  const token = req.params.token;
  const hashToken = crypto.createHash("sha256").update(token).digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashToken,
    passwordResetExpire: {
      $gt: Date.now(),
    },
  });

  if (!user) res.json({ error: "Token  Expired Please Try again" });
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpire = undefined;
  await user.save();
  res.json("Password was changed Sucessfully");
});

// getAllOrders()

module.exports = {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  deleteaUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgetPasswordToken,
  resetPassword,
  loginAdmin,
  updateRole,
  isAdminuser,
  checkSignup,
  checkresetPasswordUser,
  verifyUser
};
