import "./Slide.css";
import Marquee from "react-fast-marquee";
import img1 from '../../assets/images/slide/1.svg'
import img2 from "../../assets/images/slide/2.svg";

import img3 from "../../assets/images/slide/3.svg";

import img4 from "../../assets/images/slide/4.svg";

import img5 from "../../assets/images/slide/5.svg";

import img6 from "../../assets/images/slide/6.svg";

import img7 from "../../assets/images/slide/7.svg";


const Slide = () => {
  return (
    <>
      {/* <div className="slidemain">
        <h1>Our Insurance Partners</h1>

        <div className="slider">
          <div className="slide-track">
            {/* 9 images */}
      {/* <div className="slidee">
              <img src={img1} alt="" />
            </div>
            <div className="slidee">
              <img src={img2} alt="" />
            </div>
            <div className="slidee">
              <img src={img3} alt="" />
            </div>
            <div className="slidee">
              <img src={img4} alt="" />
            </div>
            <div className="slidee">
              <img src={img5} alt="" />
            </div>
            <div className="slidee">
              <img src={img6} alt="" />
            </div>
            <div className="slidee">
              <img src={img7} alt="" />
            </div>
            <div className="slidee">
              <img src="" alt="" />
            </div>
            <div className="slidee">
              <img src="" alt="" />
            </div> */}
      {/* </div>
        </div>
      </div>  */}

      <div className="datass">
        <div className="slidemain">
          <h1>-Our Insurance Partners-</h1>
        </div>
        <Marquee>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
        </Marquee>
      </div>
    </>
  );
};

export default Slide;
