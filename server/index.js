const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const PORT = 8000;
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRoute");
const testRideRouter = require("./routes/testrideRoute")
const callBackRouter = require("./routes/callbackRoute")
const dealerShipRouter = require("./routes/dealershipRoute")
const contactusRoute = require("./routes/contactRoute")
const otpRoute = require("./routes/otproute")
const morgan = require("morgan");
const cors = require("cors");

mongoose.set("strictQuery", true);
dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(cookieParser());
app.use("/api/user", authRouter);
app.use("/api/testride", testRideRouter);
app.use("/api/callback", callBackRouter);
app.use("/api/dealer", dealerShipRouter);
app.use("/api/otp", otpRoute);
app.use("/api/contact", contactusRoute);
app.use(notFound);
app.use(errorHandler);
const os = require("os");


// app.listen(PORT, "127.0.0.1", () => {
//   console.log(`Server listening on http://127.0.0.1:${PORT}`);
// });

const ipAddress = Object.values(os.networkInterfaces())
  .flat()
  .find(({ family, internal }) => family === "IPv4" && !internal).address;

app.listen(PORT, ipAddress, () => {
  console.log(`Server listening on http://${ipAddress}:${PORT}`);
});

