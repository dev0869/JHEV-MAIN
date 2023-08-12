import img1 from "../assets/images/bike/bike3/9.jpg";
import img2 from "../assets/images/bike/bike1/Y1.jpg";
import img3 from "../assets/images/bike/bike2/Red 3.jpg";
import { BsSpeedometer } from "react-icons/bs";


import svg from "../assets/images/bike/png/6.png";

import svg1 from "../assets/images/bike/png/5.png";
import svg2 from "../assets/images/bike/png/7.png";


import {bike1,bike2,bike3,bike4,bike5} from '../assets/images/bike/bike1'
import { bike6,bike7,bike8,bike9,bike10 } from "../assets/images/bike/bike2";
import { bike11,bike12,bike13,bike14,bike15 } from "../assets/images/bike/bike3";

export const Bike = [
  {
    id: 0,
    name: "Delta R3",

    image: img1,
    rotate: [
      { img: bike11 },
      { img: bike12 },
      { img: bike13 },
      { img: bike14 },
      { img: bike15 },
    ],
    png: svg2,
    price:"1,99,000",
   features: [
      {
        value: "3000W",
        name: "Motor Type & Power",
        icon: <BsSpeedometer  />,
      },
      {
        value: "72 V",
        icon: <BsSpeedometer  />,
        name: "Controller Type",
      },
      {
        icon: <BsSpeedometer  />,
        value: "Digital",
        name: "Speedo Meter",
      },
      {
        value: "72 V 60 ah",
        icon: <BsSpeedometer  />,
        name: "Battery Capacity",
      },
      {
        value: "90 - 100 kmph",
        icon: <BsSpeedometer  />,
        name: "Speed",
      },
      {
        value: " 150 - 200 km",
        icon: <BsSpeedometer  />,
        name: "Total-Range",
      },
      {
        value: "17 inch/17 inch",
        icon: <BsSpeedometer  />,
        name: "Tyre Specification F & R",
      },
      {
        value: "3 to 4 hr",
        icon: <BsSpeedometer  />,
        name: "Charging Time",
      },
      {
        icon: <BsSpeedometer  />,
        value: "Telescopic & Hydraulic",
        name: "Suspension F & R",
      },
      {
        icon: <BsSpeedometer  />,
        value: "Disc",
        name: "Break F & R",
      },
    ],
  },

  {
    id: 1,
    name: "Delta V6",

    image: img3,
    rotate: [
      { img: bike6 },
      { img: bike7 },
      { img: bike8 },
      { img: bike9 },
      { img: bike10 },
    ],
    png: svg,
    price:"1,59,000",
   features: [
      {
        value: "3000W",
        name: "Motor Type & Power",
        icon: <BsSpeedometer  />,
      },
      {
        value: "72 V",
        icon: <BsSpeedometer  />,
        name: "Controller Type",
      },
      {
        icon: <BsSpeedometer  />,
        value: "Digital",
        name: "Speedo Meter",
      },
      {
        value: "72 V 43 ah",
        icon: <BsSpeedometer  />,
        name: "Battery Capacity",
      },
      {
        value: "85 kmph",
        icon: <BsSpeedometer  />,
        name: "Speed",
      },
      {
        value: " 120 - 150 km",
        icon: <BsSpeedometer  />,
        name: "Total-Range",
      },
      {
        value: "17 inch/17 inch",
        icon: <BsSpeedometer  />,
        name: "Tyre Specification F & R",
      },
      {
        value: "3 to 4 hr",
        icon: <BsSpeedometer  />,
        name: "Charging Time",
      },
      {
        icon: <BsSpeedometer  />,
        value: "Telescopic & Hydraulic",
        name: "Suspension F & R",
      },
      {
        icon: <BsSpeedometer  />,
        value: "Disc",
        name: "Break F & R",
      },
    ],
  },
  {
    id: 2,
    name: "Delta E5",

    image: img2,
    rotate: [
      { img: bike1 },
      { img: bike2 },
      { img: bike3 },
      { img: bike4 },
      { img: bike5 },
    ],
    png: svg1,
    price:"1,99,000",
   features: [
      {
        value: "3000W",
        name: "Motor Type & Power",
        icon: <BsSpeedometer  />,
      },
      {
        value: "72 V",
        icon: <BsSpeedometer  />,
        name: "Controller Type",
      },
      {
        icon: <BsSpeedometer  />,
        value: "Digital",
        name: "Speedo Meter",
      },
      {
        value: "72 V 43 ah",
        icon: <BsSpeedometer  />,
        name: "Battery Capacity",
      },
      {
        value: "85 kmph",
        icon: <BsSpeedometer  />,
        name: "Speed",
      },
      {
        value: " 120 - 150 km",
        icon: <BsSpeedometer  />,
        name: "Total-Range",
      },
      {
        value: "17 inch/17 inch",
        icon: <BsSpeedometer  />,
        name: "Tyre Specification F & R",
      },
      {
        value: "3 to 4 hr",
        icon: <BsSpeedometer  />,
        name: "Charging Time",
      },
      {
        icon: <BsSpeedometer  />,
        value: "Telescopic & Hydraulic",
        name: "Suspension F & R",
      },
      {
        icon: <BsSpeedometer  />,
        value: "Disc",
        name: "Break F & R",
      },
    ],
  },
];
