import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

import { sc14 } from "../../assets/images/bike/scooter3";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
const Cart = () => {
  const data = useSelector((state) => state.cart.product);
  const { price } = data;
  const maxprice = parseInt(price?.replace(/,/g, "").toLocaleString());

  const [number, setNumber] = useState(2100);
  return (
    <>
      <Stack
        display={"flex"}
        direction={"row"}
        flexWrap={"wrap"}
        className="cartmain"
        gap={8}
      >
        <Stack flex={4} justifyContent={"center"} className="cartimg">
          <img src={data.img} alt="" />
        </Stack>
        <Stack flex={6} width={"100%"} className="cartdetail">
          <h1>{data.name}</h1>
          <p style={{color:'#282825'}}>
            ₹{data.price} <span className="sp">(Ex-Showroom Price)</span>{" "}
          </p>
          <Stack>
            <div
              style={{
                gap: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
              className="styleinput"
            >
              <input type="text" placeholder="State" />
              <input type="text" placeholder="City" />
            </div>
          </Stack>
          <br />
          <p style={{ color: "black" }}>Advance Payment</p>
          <Stack
            display={"flex"}
            sx={{
              flexWrap: {
                xs: "wrap",
                md: "nowrap",
              },
              gap: {
                xs: 3,
                md: 6,
              },
            }}
            direction={"row"}
            alignItems={"center"}
          >
            {/* slider................................ */}
            <Stack
              sx={{
                width: { xs: "100%", md: "50%" },
              }}
            >
              <Stack
                display={"flex"}
                justifyContent={"space-between"}
                direction={"row"}
              >
                <span
                  style={{
                    color: "orangered",
                    textAlign: "center",
                    fontSize: "12px",
                  }}
                >
                  &#8377;2,100
                  <br />
                  (Advance Payment)
                </span>
                <span
                  style={{
                    color: "orangered",
                    textAlign: "center",
                    fontSize: "12px",
                  }}
                >
                  &#8377;{data.price}
                  <br />
                  (Ex-showroom Price)
                </span>
              </Stack>
              <input
                className="slider"
                type="range"
                min={2100}
                max={maxprice}
                step={50}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Stack>

            <div className="stylediv">
              <input
                type="text"
                style={{ outline: "none" }}
                value={number.toLocaleString()}
                min={2100}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          </Stack>
          <br />
          <Stack display={"flex"} direction={"row"} gap={2}>
            <input type="checkbox" />
            <p style={{ color: "#282825" }}>
              I agree to the{" "}
              <Link to={"/terms-and-conditon"} style={{ fontWeight: "bold" }}>
                <span style={{color:'orangered'}}>Terms & Conditions</span>
              </Link>
            </p>
          </Stack>
          <span style={{ color: "orangered" }}>
            Please agree to the terms and conditions to proceed.
          </span>
          <br />
          <br />
          <div className="navButtonss navwidth">
            <button className="submit subpad">Pay Now</button>
          </div>
        </Stack>
      </Stack>
    </>
  );
};

export default Cart;
