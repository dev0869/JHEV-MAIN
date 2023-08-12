import img1 from "../assets/images/scooter/AlphaK1-2.png";
import img2 from "../assets/images/scooter/AlphaR1 (3).png";
import img3 from "../assets/images/scooter/AlphaR3-1.png";
import img4 from "../assets/images/scooter/Alphar5-1.png";
import { BsSpeedometer } from "react-icons/bs";

import { AiOutlineControl } from 'react-icons/ai'

import {
  GiDigitalTrace,
  GiCharging,
  GiTireTracks,
  GiSuspensionBridge,
} from "react-icons/gi";
import { FaMotorcycle } from "react-icons/fa";
import svg from "../assets/images/bike/png/1.png";

import svg1 from "../assets/images/bike/png/2.png";
import svg2 from "../assets/images/bike/png/3.png";
import svg3 from "../assets/images/bike/png/4.png";

import { sc6, sc7, sc8, sc9, sc10 } from "../assets/images/bike/scooter2";
import { sc11, sc12, sc13, sc14, sc15 } from "../assets/images/bike/scooter3";
import { sc16, sc17, sc18, sc19, sc20 } from "../assets/images/bike/scooter4";
import { sc21, sc22, sc23, sc24, sc25 } from "../assets/images/bike/scooter5";

export const Scooter = [
  {
    id: 0,
    name: " Alfa k1",

    image: img1,
    rotate: [
      { img: sc11 },
      { img: sc12 },
      { img: sc13 },
      { img: sc14 },
      { img: sc15 },
    ],
    png: svg,
    price: "145,000",
    features: [
      {
        value: "3000W",
        name: "Motor Type & Power",
        icon: <BsSpeedometer />,
      },
      {
        value: "72 V",
        icon: <BsSpeedometer />,
        name: "Controller Type",
      },
      {
        icon: <BsSpeedometer />,
        value: "Digital",
        name: "Speedo Meter",
      },
      {
        value: "73 V 30 ah",
        icon: <BsSpeedometer />,
        name: "Battery Capacity",
      },
      {
        value: "80 - 85 kmph",
        icon: <BsSpeedometer />,
        name: "Speed",
      },
      {
        value: " 100 - 120 km",
        icon: <BsSpeedometer />,
        name: "Total-Range",
      },
      {
        value: "12 inch/12 inch",
        icon: <BsSpeedometer />,
        name: "Tyre Specification F & R",
      },
      {
        value: "3 to 4 hr",
        icon: <BsSpeedometer />,
        name: "Charging Time",
      },
      {
        icon: <BsSpeedometer />,
        value: "Telescopic & Hydraulic",
        name: "Suspension F & R",
      },
      {
        icon: <BsSpeedometer />,
        value: "Disc",
        name: "Break F & R",
      },
    ],
  },

  {
    id: 1,
    name: " Alfa R1",

    image: img2,
    rotate: [
      { img: sc21 },
      { img: sc22 },
      { img: sc23 },
      { img: sc24 },
      { img: sc25 },
    ],
    png: svg1,
    price: "99,000",
    features: [
      {
        value: "2000W",
        name: "Motor Type & Power",
      },
      {
        value: "60 V",
        name: "Controller Type",
      },
      {
        value: "Digital",
        name: "Speedo Meter",
      },
      {
        value: "60 V 38 ah",
        name: "Battery Capacity",
      },
      {
        value: "70 kmph",
        name: "Speed",
      },
      {
        value: " 80 - 100 km",
        name: "Total-Range",
      },
      {
        value: "12 inch/12 inch",
        name: "Tyre Specification F & R",
      },
      {
        value: "3 to 4 hr",
        name: "Charging Time",
      },
      {
        value: "Telescopic & Hydraulic",
        name: "Suspension F & R",
      },
      {
        value: "Disc",
        name: "Break F & R",
      },
    ],
  },
  {
    id: 2,
    name: " Alfa R3",

    image: img3,
    rotate: [
      { img: sc16 },
      { img: sc17 },
      { img: sc18 },
      { img: sc19 },
      { img: sc20 },
    ],
    png: svg2,
    price: "149,000",
    features: [
      {
        value: "3000W",
        name: "Motor Type & Power",
      },
      {
        value: "72 V",
        name: "Controller Type",
      },
      {
        value: "Digital",
        name: "Speedo Meter",
      },
      {
        value: "73 V 30 ah",
        name: "Battery Capacity",
      },
      {
        value: "80 kmph",
        name: "Speed",
      },
      {
        value: " 100 - 120 km",
        name: "Total-Range",
      },
      {
        value: "12 inch/12 inch",
        name: "Tyre Specification F & R",
      },
      {
        value: "3 to 4 hr",
        name: "Charging Time",
      },
      {
        value: "Telescopic & Hydraulic",
        name: "Suspension F & R",
      },
      {
        value: "Disc",
        name: "Break F & R",
      },
    ],
  },
  {
    id: 3,
    name: " Alfa R5",

    image: img4,
    rotate: [
      { img: sc6 },
      { img: sc7 },
      { img: sc8 },
      { img: sc9 },
      { img: sc10 },
    ],
    png: svg3,
    price: "129,000",
    features: [
      {
        value: "2000W",
        name: "Motor Type & Power",
      },
      {
        value: "72 V",
        name: "Controller Type",
      },
      {
        value: "Digital",
        name: "Speedo Meter",
      },
      {
        value: "72 V 30 ah",
        name: "Battery Capacity",
      },
      {
        value: "80 - 85 kmph",
        name: "Speed",
      },
      {
        value: " 100 km",
        name: "Total-Range",
      },
      {
        value: "12 inch/12 inch",
        name: "Tyre Specification F & R",
      },
      {
        value: "3 to 4 hr",
        name: "Charging Time",
      },
      {
        value: "Telescopic & Hydraulic",
        name: "Suspension F & R",
      },
      {
        value: "Disc",
        name: "Break F & R",
      },
    ],
  },
];

export const Iconss = [
  <FaMotorcycle />,
  <AiOutlineControl />,
  <BsSpeedometer />,
  <GiCharging />,
  <BsSpeedometer />,
  <BsSpeedometer />,
  <GiTireTracks />,
  <GiTireTracks />,
  <GiSuspensionBridge />,

  <GiDigitalTrace />,
];
