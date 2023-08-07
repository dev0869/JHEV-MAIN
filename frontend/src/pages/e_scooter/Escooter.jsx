import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Scooter } from "../../constants/Scooter";
import "../pages.css";

const Escooter = () => {
  return (
    <div className="Container" style={{ margin: "40px 10px 100px 10px" }}>
      <h1 className="scootermain">E-SCOOTERS</h1>

      <Stack
        display={"flex"}
        gap={3}
        direction={"row"}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
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
      </Stack>
    </div>
  );
};

export default Escooter;
