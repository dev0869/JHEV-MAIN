import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import cartSlice from "../features/cart/cartSlice";
import dummySlice from "../features/Dummy/dummySlice";
import readSlice from "../features/curd/readSlice";
import testrideSlice from './../features/testride/index';
import LoadingSlice from "../features/loading/loadingSlice";
import callBackSlice from "../features/callback";
import dealershipSLice  from "../features/dealership";
import userListSlice from "../features/userList";
import enquirySlice from "../features/enquiry/enquirySlice";
export const store = configureStore({
  reducer: {
    users: userSlice,
    readuser:readSlice,
    dummy: dummySlice,
    cart: cartSlice,
    testrides: testrideSlice,
    callback: callBackSlice,
    loading: LoadingSlice,
    dealer:dealershipSLice,
    userlist:userListSlice,
    contactus:enquirySlice
  },
});
