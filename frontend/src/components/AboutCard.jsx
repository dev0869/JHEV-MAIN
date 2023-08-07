import { Stack } from "@mui/material";
import { AboutCardData } from "../constants/AboutCard";
const AboutCard = () => {
  return (
    <>
      <Stack
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        direction={"row"}
        gap={3}
      >
        {
          AboutCardData.map((ele, i) => {
            const { image, name, para } = ele
            return (
              <>
                <Stack key={i} alignItems={"center"} className="aboutCard">
                  <img src={image} alt="" width={100} />
                  <br />
                  <h1>{name}</h1>
                  <p>
                    {para}
                  </p>
                </Stack>
              </>
            );
          })
        }

      </Stack>
    </>
  );
};

export default AboutCard;
