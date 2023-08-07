import Carousel from "react-bootstrap/Carousel";
import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
} from "../../assets/images/banner";
import { bike12, bike11, bike14 } from "../../assets/images/bike/bike3";
import { bycicle, telephone, setting } from "../../assets/images/icon";
import { Link } from "react-router-dom";

export const BannerCarousal = () => {
  return (
    <div className="border">
      <Carousel interval={1000}>
        <Carousel.Item>
          <img className="d-block w-100" src={banner7} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner5} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner4} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner6} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export const HelpSection = () => {


  const help = [
    {
      path:"/",
      img: bycicle,
      text: "BOOK NOW",
    },

    {
      path:"/testbookride",
      img: telephone,
      text: `TEST RIDE`,
    },
    {
      img: setting,
      path:"/callback",
      text: "REQUEST CALLBACK",
    },
  ];
  return (
    <div className=" container p-4">
      <div className="col-12 d-flex flex-col md:flex-row justify-center gap-4 md:gap-0 ">
        <div className="col-12 col-md-7 py-4 d-flex flex-col">
          <h1
            className="text-start h2 md:h1 text-uppercase col-12 text-[2rem] md:text-[3rem]  italic"
            style={{ fontWeight: "1000", fontFamily: "speed", color: "red" }}
          >
            How we can help You ?
          </h1>
          <div className="col-12 flex mt-8">
            {help.map((e, i) => {
              return (
                <Link to={e.path}
                  key={i}
                  className="help-box w-[33%] md:w-[200px]"
                >
                  <div className="help-icon w-24 h-24">
                    <img src={e.img} className="w-20" alt="" />
                  </div>
                  <p className="help-label mt-2 md:text-[20px]  text-center font-[500] md:font-[550] md:text-2xl">
                    {e.text}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col-12 col-md-4 rounded flex flex-col mt-10">
          <h1
            className="h4 md:h1 text-uppercase col-12 italic text-center"
            style={{ fontWeight: "700" }}
          >
            Latest Products
          </h1>
          <Carousel interval={1000} className="col-12 rounded mt-2">
            <Carousel.Item>
              <div className="col-12 flex flex-col justify-center items-center my-4 ">
                <img className="d-block w-80" src={bike11} alt="First slide" />
                <div className="btn-bg text-center col-8">
                  <Link to={"/e-bike/0"}> Know More</Link>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-12 flex flex-col justify-center items-center my-4">
                <img className="d-block w-80" src={bike12} alt="Second slide" />
                <div className="btn-bg text-center col-8">
                  <Link to={"/e-bike/0"}> Know More</Link>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-12 flex flex-col justify-center items-center my-4">
                <img className="d-block w-80" src={bike14} alt="Second slide" />
                <div className="btn-bg text-center col-8">
                  <Link to={"/e-bike/0"}> Know More</Link>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
