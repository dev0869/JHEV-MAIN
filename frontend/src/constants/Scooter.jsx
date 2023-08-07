import img1 from "../assets/images/scooter/AlphaK1-2.png";
import img2 from "../assets/images/scooter/AlphaR1 (3).png";
import img3 from "../assets/images/scooter/AlphaR3-1.png";
import img4 from "../assets/images/scooter/Alphar5-1.png";

import svg from '../assets/images/bike/png/1.png'

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
  },
];
