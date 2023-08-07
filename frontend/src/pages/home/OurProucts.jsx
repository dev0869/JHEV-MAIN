import { Bike } from "../../constants/Bike";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Scooter } from "./../../constants/Scooter";

const OurProucts = () => {
  const [handleview, setHandleview] = useState("bike");

  return (
    <div className="container">
      <h1
        className="text-center mt-10 h2 md:h1 text-uppercase col-12 text-[28px] md:text-[2.5rem]  italic"
        style={{ fontWeight: "700" }}
      >
        EXPLORE OUR PRODUCTS
      </h1>
      <p className="text-center text-[16px] md:text-[18px] mb-4">
        Checkout the range of our scooters and motorcycles with exciting
        features and latest technology.
      </p>
      <div className="p-2 flex justify-center">
        <button
          onClick={() => setHandleview("bike")}
          className={
            handleview === "bike"
              ? "text-xl font-[600] mb-2 mx-2 border-b-2 px-1 border-red-600 text-red-600"
              : "text-xl font-[600] mb-2 mx-2 border-b-2 px-1 border-gray-800 text-gray-800"
          }
        >
          {" "}
          Bike
        </button>
        <button
          onClick={() => setHandleview("scooter")}
          className={
            handleview === "scooter"
              ? "text-xl font-[600] mb-2 mx-2 border-b-2 px-1 border-red-600 text-red-600"
              : "text-xl font-[600] mb-2 mx-2 border-b-2 px-1 border-gray-800 text-gray-800"
          }
        >
          {" "}
          Scooter
        </button>
      </div>

      {handleview === "bike" && (
        <div className="flex flex-wrap justify-center">
          {Bike.map((ele, i) => {
            return (
              <Stack
                className="scooterimg"
                key={i}
                display={"flex"}
                flexWrap={"wrap"}
                direction={"column"}
              >
                <Link to={`/e-bike/${ele.id}`}>
                  <img src={ele.image} width={400} alt="" />
                  <h2 style={{ textAlign: "center" }}>{ele.name}</h2>
                </Link>
              </Stack>
            );
          })}
        </div>
      )}
      {handleview === "scooter" && (
        <div className="flex flex-wrap justify-center">
          {Scooter.map((ele, i) => {
            return (
             
                <Stack
                  className="scooterimg"
                  key={i}
                  display={"flex"}
                  flexWrap={"wrap"}
                  direction={"column"}
                >
                  <Link to={`/e-scooter/${ele.id}`}>
                    <img src={ele.image} width={300} alt="" />
                    <h2 style={{ textAlign: "center" }}>{ele.name}</h2>
                  </Link>
                </Stack>
        
            );
          })}
        </div>
      )}
    </div>
  );
};

export default OurProucts;
