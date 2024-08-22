import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Australia",
    src: photo1,
    photographer: "Tourism Australia",
    location: "Australia",
  },
  {
    id: "2",
    name: "Công viên quốc gia Khao Sok",
    src: photo2,
    photographer: "Emaze",
    location: "Thái Lan",
  },
  {
    id: "3",
    name: "Núi Kilimanjaro và vùng Serengeti",
    src: photo3,
    photographer: "Launch DFW",
    location: "Tanzania",
  },
  {
    id: "4",
    name: "Công viên quốc gia Sangay ",
    src: photo4,
    photographer: "Guidetrip",
    location: "Ecuador",
  },
  {
    id: "5",
    name: "Dolomites là một trong những dãy núi đẹp nhất thế giới, với đèo San Pellegrino",
    src: photo5,
    photographer: "InspirationSeek",
    location: "Italy",
  },
  {
    id: "6",
    name: "enezuela sở hữu thác Angel cao nhất thế giới (979 m)",
    src: photo6,
    photographer: "World Viewers Stop",
    location: "Venezuela",
  },
];

export default wondersImages;
