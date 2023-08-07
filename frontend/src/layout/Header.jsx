import { Stack } from "@mui/material";
import Logo from "../assets/images/logo.png";
import india from "../assets/india.gif";
import { Link } from "react-router-dom";
import pep from "../assets/pep.svg";
import "./Layout.css";
import NavButton from "../components/NavButton";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { SmallRoutes } from "../constants/Routes";
import { RiMenu2Line } from "react-icons/ri";

import { SmNavButton } from "../components/NavButton";
import { AiOutlineLogout, AiOutlineRight } from "react-icons/ai";
import TagManager from "react-gtm-module";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Togglemenu = ({ tog, onClose }) => {
  const [data, setData] = useState(SmallRoutes);
  const isAdminRoute = useLocation().pathname.includes("admin");
  const handleNavItemClick = () => {
    onClose();
  };

  if (!isAdminRoute) {
    return (
      <>
        <Stack
          onClick={handleNavItemClick}
          className={tog ? "Nav_barTOGGLE" : "Nav_barTOGGLEE"}
          display={"flex"}
          justifyContent={"space-between"}
          padding={"16px 25px"}
          direction={"row"}
          zIndex={9}
        >
          <Stack
            display={"flex"}
            justifyContent={"space-between"}
            direction={"column"}
            width={"100%"}
            textAlign={"left"}
            gap={2}
          >
            {data.map((ele, i) => {
              const { name, path, icon } = ele;
              return (
                <div key={i}>
                  <NavLink className="navlink" to={path}>
                    <Stack
                      display={"flex"}
                      padding={"12px 0"}
                      justifyContent={"space-between"}
                      direction={"row"}
                      alignItems={"center"}
                    >
                      <Stack
                        direction={"row"}
                        gap={1}
                        display={"flex"}
                        alignItems={"center"}
                      >
                        <p>{icon}</p>
                        <p style={{ position: "relative", top: "2px" }}>
                          {name}
                        </p>
                      </Stack>
                      <AiOutlineRight />
                    </Stack>
                  </NavLink>

                  <hr />
                </div>
              );
            })}
            <SmNavButton />
          </Stack>
        </Stack>
      </>
    );
  }
};

const Header = () => {
  TagManager.dataLayer({
    dataLayer: {
      event: "button_click",
      eventCategory: "Button",
      eventAction: "Click",
      eventLabel: "My Button",
    },
  });
  const [show, setShow] = useState(true);
  const isAdminRoute = useLocation().pathname.includes("admin");

  const handleToggleMenu = () => {
    setShow(!show);
  };
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const handlelogout =()=>{
    dispatch(logout())
  }

  if (!isAdminRoute) {
    return (
      <div
        className="w-full Nav_bar"
        style={{ boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.3)" }}
      >
        <div className="w-full navs">
          <Stack
            className=" container"
            display={"flex"}
            justifyContent={"end"}
            direction={"row"}
          >
            <Stack
              display={"flex"}
              justifyContent={"space-between"}
              direction={"row"}
              alignItems={"center"}
              gap={4}
            >
              <Stack
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                gap={1}
              >
                <img src={india} alt="" />
                <p
                  style={{
                    color: "white",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  India
                </p>
              </Stack>

              {!user ? (
                <Link to={"./login"}>
                  <Stack
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    gap={1}
                  >
                    <img src={pep} alt="" />
                    <p
                      style={{
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      Login
                    </p>
                  </Stack>
                </Link>
              ) : (
                <div className="flex gap-2 items-center">
                  <p
                  style={{
                    color: "white",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Hi {user.name} !
                </p>
                <AiOutlineLogout onClick={handlelogout} className="cursor-pointer" fontSize={20} color="white"/>
                </div>
              )}
            </Stack>
          </Stack>
        </div>

        {/*  */}
        <Stack
          className=" container"
          display={"flex"}
          padding={"12px"}
          justifyContent={"space-between"}
          direction={"row"}
        >
          <Stack
            display={"flex"}
            justifyContent={"space-between"}
            direction={"row"}
            alignItems={"center"}
            gap={8}
          >
            <img src={Logo} alt="" className="logo" />
            <Stack direction={"row"} gap={3} className="links">
              <NavLink className="navlink" to={"/"}>
                HOME
              </NavLink>
              <NavLink className="navlink" to={"/e-scooter"}>
                E-SCOOTER
              </NavLink>
              <NavLink className="navlink" to={"/e-bike"}>
                E-BIKE
              </NavLink>
              <NavLink className="navlink" to={"/about"}>
                ABOUT US
              </NavLink>
              <NavLink className="navlink" to={"/contact"}>
                CONTACT US
              </NavLink>
            </Stack>
            <NavButton />
          </Stack>

          <button className="hamburger" onClick={handleToggleMenu}>
            <RiMenu2Line />
          </button>
        </Stack>
        {/*  */}
        <Togglemenu tog={show} onClose={handleToggleMenu} />
      </div>
    );
  }
};

export default Header;
