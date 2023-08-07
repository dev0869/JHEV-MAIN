import { Link } from "react-router-dom";
import { Bike } from "../../constants/Bike";
import { Stack } from "@mui/material";
const Ebike = () => {
  return (
    <div style={{margin:'40px 10px 100px 10px'}}>
      <div className="Container">
        <h1 className="scootermain">E-BIKE</h1>

        <Stack display={"flex"} gap={3} direction={"row"} justifyContent={'center'}  flexWrap={"wrap"}>
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
        </Stack>
      </div>
    </div>
  );
}

export default Ebike;
