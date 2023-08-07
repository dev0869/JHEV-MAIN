// import React from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { TbMotorbike } from "react-icons/tb";
import { GiTeamIdea } from "react-icons/gi";
import Dashboard from "./Dashboard";
import TestRide from "./TestRide";
import { useDispatch } from "react-redux";
import { getalltestride } from "../../features/testride";
import { FcCallback } from "react-icons/fc";
import { base_url } from "../../utils/baseUrl";
import axios from "axios";
import { logout } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { getallcalls } from "../../features/callback";
import CallBackRequest from "./Callback";
import { getalldealrship } from "../../features/dealership";
import DealerShipReq from "./Dealship";
import { getallUserList } from './../../features/userList/index';
import UserList from "./UsersList";
import { FaUser } from "react-icons/fa";
import ContactUsRequest from "./contactus";
import { getEnquiries } from "../../features/enquiry/enquirySlice";
const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const sidetoggle =
    "col-12 fixed col-md-2 bg-white h-full shadow transition-all z-[9] delay-600 -left-[105vw]";
  const sidenottoggle =
    "col-12 fixed col-md-2 bg-white h-full shadow transition-all top-[86px] delay-600 left-0";
  const routes = [
    {
      path: "/admin",
      icon: <RxDashboard fontSize={22} color="skyblue"/>,
      txt: "Dashboard",
    },
    {
      path: "/admin/testride",
      icon: <TbMotorbike fontSize={22} />,
      txt: "Bookings",
    },
    {
      path: "/admin/callback",
      icon: <FcCallback fontSize={22} />,
      txt: "Request Call",
    },
    {
      path: "/admin/dealer-request",
      icon: <GiTeamIdea fontSize={22} />,
      txt: "DealerShip Req.",
    },
    {
      path: "/admin/userlist",
      icon: <FaUser fontSize={16} />,
      txt: "Users List",
    },
    {
      path: "/admin/contact",
      icon: <FaUser fontSize={16} />,
      txt: "Contact us Req.",
    },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAdmin, setadmin] = useState(false);

  const checkAdmin = async () => {
   


    const email = JSON.parse(localStorage.getItem("user"))?.email || null;
    try {
      const res = await axios.post(`${base_url}user/isadmin`, { email });
      setadmin(res.data.admin);
    } catch (error) {
      setadmin(false);
      navigate("/login");
      toast.warn("You are not admin");
      console.error(error.message);
    }
  };

  useEffect(() => {
    checkAdmin();
    // dispatch(getAllUsers())
    dispatch(getalltestride());
    dispatch(getallcalls());
    dispatch(getalldealrship());
    dispatch(getallUserList())
    dispatch(getEnquiries())
  }, [dispatch]);

  if (isAdmin) {
    return (
      <>
        
        <nav className="flex bg-white z-[999] items-center sticky border shadow-sm top-0 p-3 gap-4 justify-between">
          <div className="flex gap-2  items-center">
            <AiOutlineMenu
              onClick={toggleSidebar}
              className="cursor-pointer"
              fontSize={50}
            />
            <Link to={"/"}>
              <img src={logo} alt="" className="w-24 ml-4" />
            </Link>
          </div>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              dispatch(logout());
              navigate("/login");
            }}
          >
            Logout
          </button>
        </nav>
        {/* nav ends here */}


        <div className={isSidebarOpen ? sidenottoggle : sidetoggle}>
          {routes.map((itm, i) => (
            <NavLink
              key={i}
              to={itm.path}
              className=" p-4 text-md flex items-center gap-2 border-b-2 py-2 w-full"
            >
              {itm.icon} {itm.txt}
            </NavLink>
          ))}
        </div>
        {/* sidebar end herer */}
        <div className="col-12 flex">
          <div
            className={
              isSidebarOpen
                ? "col-2 flex justify-between p-4"
                : "col-2 d-none border justify-between p-4"
            }
          ></div>
          <div
            className={
              isSidebarOpen
                ? "col-10 flex justify-between p-4"
                : "col-12 flex justify-between p-4"
            }
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/testride" element={<TestRide />} />
              <Route path="/callback" element={<CallBackRequest />} />
              <Route path="/dealer-request" element={<DealerShipReq />} />   
              <Route path="/userlist" element={<UserList />} />   
              <Route path="/contact" element={<ContactUsRequest />} />   
            </Routes>
          </div>
        </div>
      </>
    );
  }
};

export default Admin;
