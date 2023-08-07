import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./layout/index.js";
import Login from "./components/login/login.jsx";
import Term from "./components/policies/term.jsx";
import Privacy from "./components/policies/Privacy.jsx";
import { Home, About, Escooter, Ebike, Contact } from "./pages/index.js";
import Product from "./components/mainpage/product.jsx";
import Cart from "./components/cart/Cart.jsx";
import Refund from "./components/policies/Refund.jsx";
import Otp from "./pages/booktestride/Otp.jsx";
import Seedetail from "./pages/admin/Seedetail.jsx";
import Admin from "./pages/admin/Admin.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Success from "./pages/booktestride/Success.jsx";
import Fail from "./pages/booktestride/Fail.jsx";
import BookTestRide from "./pages/booktestride/BookTestRide.jsx";
import Loading from "./components/Loading.jsx";
import { useSelector } from "react-redux";
import {
  CallFail,
  CallOtp,
  CallSuccess,
  Callback,
} from "./pages/callbacks/index.js";
import {
  Dealer,
  DealerFail,
  DealerOtp,
  DealerSuccess,
} from "./pages/dealer/index.js";
import SignUpOTP from "./components/login/signupOtp.jsx";
import ForgotPasswordPage from "./components/login/ForgotPassword.jsx";
import ResetPassword from "./components/login/ResetPassword.jsx";
import { useEffect } from "react";
import { verifyUserLogin } from "./apis/index.js";
function App() {
  const Load = useSelector((st) => st.loading.show);
  const verifyLogin = async()=>{
    const user = JSON.parse(localStorage.getItem("user"))?.email
    if(user){
      try {
        const res = await verifyUserLogin();
        if(res.success){
          return
        }else{
          toast.info("Your login session is expired. Please Login again !")
          localStorage.removeItem("user")
          window.location.reload()
        }
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
  useEffect(()=>{
    verifyLogin()
  },[])
  return (
    <>
      <ToastContainer />
      <Header />
      {Load && <Loading />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/e-scooter" element={<Escooter />} />
        <Route path="/e-scooter/:id" element={<Product />} />
        <Route path="/e-bike" element={<Ebike />} />
        <Route path="/e-bike/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dealer" element={<Dealer />} />
        <Route path="/dealer/success" element={<DealerSuccess />} />
        <Route path="/dealer/fail" element={<DealerFail />} />
        <Route path="/dealer/otp" element={<DealerOtp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpOTP />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:id" element={<ResetPassword />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="terms-and-conditon" element={<Term />} />
        <Route path="/testbookride" element={<BookTestRide />} />
        <Route path="/testbookride/success" element={<Success />} />
        <Route path="/testbookride/fail" element={<Fail />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/callback/success" element={<CallSuccess />} />
        <Route path="/callback/fail" element={<CallFail />} />
        <Route path="/callback/otp" element={<CallOtp />} />
        <Route path="/Otp" element={<Otp />} />
        <Route path="refund-and-return-policy" element={<Refund />} />

        <Route path="/testing" element={<Seedetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
