import { useRef, useState } from "react";
import img from "../../assets/left-rotate.png";
import { addCart } from "../../features/cart/cartSlice";
import img2 from "../../assets/right-rotate.png";
import { BsBatteryCharging } from "react-icons/bs";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { BiSolidParking } from "react-icons/bi";
import { BsSpeedometer } from "react-icons/bs";
import { GiOrange, GiCharging, GiTireTracks } from "react-icons/gi";
import { FaMotorcycle } from "react-icons/fa";

import "./rotate.css";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
const Rotate = ({ data }) => {
  const dispatch = useDispatch();
  const { rotate, png, name, id, image,price } = data;
  console.log(data);
  const cardRef = useRef(null);
  const handlecart = () => {
    dispatch(
      addCart({
        name: name,
        id: id,
        img: image,
        price:price,
      })
    );
  };
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    cardRef.current.style.cursor = "grabbing";
  };

  const handleDrag = (e) => {
    if (!isDragging) return;
    const dragDistance = e.clientX - dragStart;
    const numImages = 5; // Number of images in the carousel
    const angleIncrement = 72; // Each image has a 72-degree rotation
    const currentImage = Math.round(
      (dragDistance / cardRef.current.clientWidth) * numImages
    );
    const clampedImage = Math.max(0, Math.min(currentImage, numImages - 1));
    cardRef.current.style.setProperty(
      "--i",
      clampedImage * angleIncrement + "deg"
    );
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDragStart(0);
    cardRef.current.style.cursor = "grab";
  };

  return (
    <>
      <div className="banner">
        <div className="Rotatebanner ">
          <h1> -360 Degree. EXPERIENCE-</h1>
        </div>
        <div className="stack">
          <ul>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                margin: "12px",
                gap: "12px",
              }}
            >
              <h1>Environment Friendly</h1>
              <GiPlantsAndAnimals size={12} className="box" />
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                margin: "12px",
                gap: "12px",
              }}
            >
              <h1>Easy to Park</h1>
              <BiSolidParking size={12} className="box" />
            </li>{" "}
            <li
              style={{
                display: "flex",
                alignItems: "center",
                margin: "12px",
                gap: "12px",
              }}
            >
              <h1>Cost Effective</h1>
              <GiPlantsAndAnimals size={12} className="box" />
            </li>
          </ul>

          <div className="cardmain">
            <img className="cardmainimg" src={img} alt="" />
            <div
              className="card"
              ref={cardRef}
              onMouseDown={handleDragStart}
              onMouseMove={handleDrag}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              style={{ cursor: isDragging ? "grabbing" : "grab" }}
            >
              <span style={{ "--i": 0 }}></span>
              <img src={rotate[0].img} alt="" />
              <span style={{ "--i": 1 }}></span>
              <img src={rotate[1].img} alt="" />
              <span style={{ "--i": 2 }}></span>
              <img src={rotate[2].img} alt="" />
              <span style={{ "--i": 3 }}></span>
              <img src={rotate[3].img} alt="" />
              <span style={{ "--i": 4 }}></span>
              <img src={rotate[4].img} alt="" />
            </div>
            <img className="cardmainimg" src={img2} alt="sds" />
          </div>

          <ul>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                margin: "12px",
                gap: "12px",
              }}
            >
              <h1>Environment Friendly</h1>
              <GiPlantsAndAnimals size={12} className="box" />
            </li>{" "}
            <li
              style={{
                display: "flex",
                alignItems: "center",
                margin: "12px",
                gap: "12px",
              }}
            >
              <h1>Environment Friendly</h1>
              <GiPlantsAndAnimals size={12} className="box" />
            </li>{" "}
            <li
              style={{
                display: "flex",
                alignItems: "center",
                margin: "12px",
                gap: "12px",
              }}
            >
              <h1>Environment Friendly</h1>
              <GiPlantsAndAnimals size={12} className="box" />
            </li>
          </ul>
        </div>

        <div
          className="navButtons"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Link to={"/cart"}>
            {" "}
            <button
              style={{
                padding: "10px 15px",
                fontSize: "20px",
                marginTop: "20px",
              }}
              onClick={handlecart}
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
      {/* specification */}
      <div style={{ background: "#FAFCEA", padding: "40px 0" }}>
        <div className="Rotatebanner ">
          <h1 style={{ color: "black" }}>-{name} Specification-</h1>

          <Stack
            display={"flex"}
            direction={"row"}
            flexWrap={"wrap"}
            gap={3}
            justifyContent={"center"}
          >
            <div className="spec">
              <FaMotorcycle size={60} />
              <h2>-Motor-</h2>
              <p>7000vh</p>
            </div>
            <div className="spec">
              <BsBatteryCharging size={60} />
              <h2>-Battery Capacity-</h2>
              <p>3.5 kwh</p>
            </div>
            <div className="spec">
              <GiCharging size={60} />
              <h2>-Charging Time-</h2>
              <p>3-4 hr</p>
            </div>
            <div className="spec">
              <GiOrange size={60} />
              <h2>-Range-</h2>
              <p>140-150 km/hr</p>
            </div>
            <div className="spec">
              <GiTireTracks size={60} />
              <h2>-F/R Breaks-</h2>
              <p>Disc Break</p>
            </div>
            <div className="spec">
              <BsSpeedometer size={60} />
              <h2>-Top Speed-</h2>
              <p>80-90km/hr</p>
            </div>
          </Stack>
        </div>
      </div>
      <Stack fontSize={12} padding={8}>
        <div className="lowcontent">
          <h1>
            RIDE WITH DESH KI NAYI DADHKAN{" "}
            <span className="hide">
              {name}
              <br />
              AT JUST 20 PAISA PER KM
            </span>
          </h1>
        </div>
        <div
          style={{
            textAlign: "center",
    
            fontFamily: "heavy",
            display: "flex",
            justifyContent: "space-around",
            fontSize: "30px",
          }}
          className="er"
        >
   
          <div className="specdetail">
            <h1 style={{ fontWeight: 900 }}>85kmph </h1>
            <p>Top Speed</p>
          </div>
          <div className="specdetail">
            <h1 style={{ fontWeight: 900 }}>120kmph </h1>
            <p>Range</p>
          </div>
          <div className="specdetail">
            <h1 style={{ fontWeight: 900 }}>4~5 Hours </h1>
            <p>Charging Time</p>
          </div>
        </div>
      </Stack>

      <div className="banner2">
        <div className="bannerc1">
          <img src={png} alt="saad" width={1000} />
        </div>
        <div className="bannerc2">
          <h1>{name} PRICE</h1>
    

          <div className="varients">
            <h2>Varients</h2>
            <h2>Ex-Showroom Price</h2>
          </div>
          <div className="varients">
            <p>{name}</p>
            <p>₹ {price}</p>
          </div>

          <div className="navButtonss">
            <Link to={"/cart"}>
              <button
                onClick={handlecart}
                style={{ padding: "8px",marginTop:'20px', fontSize: "18px" }}
              >
                Buy Now
              </button>
            </Link>
          </div>
          <p style={{ padding: "30px 0" }}>
            *All prices are ex-showroom, T&C apply.
          </p>
        </div>
      </div>

      {/* -------------------------  specifiaction Div bar------------ */}
    </>
  );
};

export default Rotate;
