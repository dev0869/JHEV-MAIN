// import React from 'react';
import { FiMail } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineInstagram ,AiOutlineRight} from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  BsFacebook,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { Scooter } from "../constants/Scooter";
import { Bike } from "../constants/Bike";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import TagManager from "react-gtm-module";
const Footer = () => {
  TagManager.dataLayer({
    dataLayer: {
      event: "button_click",
      eventCategory: "Button",
      eventAction: "Click",
      eventLabel: "My Button",
    },
  });

  const usefullLinks = [
    { path: "privacy-policy", text: "Privacy Policy" },
    { path: "terms-and-conditon", text: "Terms and Condition" },
    { path: "refund-and-return-policy", text: "Return and Refund Policy" },
    { path: "contact", text: "Contact Us" },
    { path: "about", text: "About-Us" },
  ];

  const socialLinks = [
    {
      link: "https://www.facebook.com/jhevmotors",
      icon: <BsFacebook fontSize={16} />,
    },
    {
      link: "https://www.instagram.com/jhevmotors/",
      icon: <AiOutlineInstagram fontSize={16} />,
    },
    {
      link: "https://www.youtube.com/channel/UCtTBLwEr2zWIof5wMlmJFww",
      icon: <BsYoutube fontSize={16} />,
    },
    {
      link: "https://www.linkedin.com/company/jhevmotors/",
      icon: <BsLinkedin fontSize={16} />,
    },
  ];
  function getCurrentYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }
  const currentYear = getCurrentYear();
  const isAdminRoute = useLocation().pathname.includes("admin");

  if(!isAdminRoute){
    return (
      <div
        className="footer-container text-white mt-2"
        style={{ background: "#303030" }}
      >
        <div className="container row p-0 p-md-4">
          <div className="col-12 col-md-6 col-xl-2 mb-4 pl-4 pl-md-0 mt-4 mt-md-0 mb-md-2">
            <div className="flex items-center justify-start lg:justify-center  col-12">
              <img src={logo} alt="" className="w-[35%] sm:w-1/2 lg:w-[100%]" />
            </div>
            <div className="col-12 flex gap-4 mt-4 justify-start lg:justify-center">
              {socialLinks.map((itm, i) => (
                <a key={i} target="blank" href={itm.link}>
                  {" "}
                  {itm.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-2 mb-2 pl-4 pl-md-0">
            <h1 className="h3 text-capitalize" style={{ fontWeight: "300" }}>
              Scooters
            </h1>
            {Scooter.map((itm, i) => (
              <div key={i} className="col-12 foot-link mb-1 flex">
                <Link
                  to={`/e-scooter/${itm.id}`}
                  className="flex gap-2 items-center"
                >
                  <AiOutlineRight fontSize={16} /> {itm.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="col-12 col-md-6 col-xl-2 mb-2 pl-4 pl-md-0">
            <h1
              className="h3 text-capitalize ms-2"
              style={{ fontWeight: "300" }}
            >
              Bikes
            </h1>
            {Bike.map((itm, i) => (
              <div key={i} className="col-12 foot-link mb-1 flex">
                <Link
                  to={`/e-bike/${itm.id}`}
                  className="flex gap-2 items-center"
                >
                  <AiOutlineRight fontSize={16} /> {itm.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="col-12 col-md-6 col-xl-3 mb-2 pl-4 pl-md-0">
            <h1 className="h3 text-capitalize" style={{ fontWeight: "300" }}>
              Usefull Links
            </h1>
            {usefullLinks.map((itm, i) => (
              <div key={i} className="col-12 foot-link mb-1 flex">
                <Link to={itm.path} className="flex gap-2 items-center">
                  <AiOutlineRight fontSize={16} /> {itm.text}
                </Link>
              </div>
            ))}
          </div>
          <div className="col-12 col-md-12 col-xl-3 mb-2 pl-4 pl-md-0">
            <h1 className="h3 text-capitalize" style={{ fontWeight: "300" }}>
              contact us
            </h1>
            <div className="foot-link">
              <div className="flex gap-2 items-start mb-1">
                <HiOutlineLocationMarker fontSize={20} color="white" />
                <a className="mb-1">
                  Gat. No.118/1, Near Philips, <br /> Post - Vasuli, Tal - Khed,
                  <br /> Pune, Maharashtra- 410501
                </a>
              </div>
              <div className="flex gap-2 items-center mb-1">
                <BsFillTelephoneFill fontSize={20} color="white" />
                <div>
                  <a href="tel:+917055214135">+91 7055214135</a> ,{" "}
                  <a href="tel:+917055214515">+91 7055214515</a> ,
                  <a href="tel:+917055214323">  +91 7055214323</a>
                  <br />
                </div>
              </div>
              <div className="flex gap-2 items-center mb-1">
                <FiMail fontSize={20} color="white" />
                <a href="mailto:enquiry@jhevmotors.com">
                  enquiry@jhevmotors.com
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="col-12 text-center mt-3">
            Copyright © {currentYear} JH EV Motors, All Rights Reserved . ||
            Design and Developed By Deepnap Softech
          </div>
        </div>
      </div>
    );
  }
};

export default Footer;
