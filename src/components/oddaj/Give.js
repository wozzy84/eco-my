import React, { useState } from "react";
import { H3 } from "../atoms/styles";
import { GiveContainer, Items, ImgBoxContainer, Button, Img } from "./styles";
import ImgBox from "./ImgBox";
import medsPhoto from "../../../src/styles/assets/img/categories/leki-01.png";
import clothesPhoto from "../../../src/styles/assets/img/categories/odziez-01.png";
import plasticPhoto from "../../../src/styles/assets/img/categories/plastik-01.png";
import batteriesPhoto from "../../styles/assets/img/categories/baterie-01.png";
import teddyBearPhoto from "../../styles/assets/img/categories/zabawki-01.png";
import GiveMap from "./GiveMap";
import Header from "../homepage/header/Header";
const Give = () => {
  // const [active, setActive] = useState(false);
  const [types, setTypes] = useState([]);
  const photos = [
    {
      url: medsPhoto,
      name: "elektrośmieci",
      type: "electro",
    },
    {
      url: medsPhoto,
      name: "przeterminowane leki",
      type: "meds",
    },
    {
      url: clothesPhoto,
      name: "stare ubrania",
      type: "clothes",
    },
    {
      url: plasticPhoto,
      name: "nakrętki plastikowe",
      type: "caps",
    },
    {
      url: batteriesPhoto,
      name: "baterie",
      type: "batteries",
    },
    {
      url: teddyBearPhoto,
      name: "zabawki",
      type: "toys",
    },
  ];

  return (
    <>
      <Header />
      <GiveContainer>
        <H3 isWhite>Chcę oddać</H3>
        <Items>
          <ImgBoxContainer>
            {photos.map((photo, index) => (
              <ImgBox
                clicked={(active) => {
                  setTypes(
                    active
                      ? [...types, photo.type].slice(0)
                      : types.filter((t) => t !== photo.type).slice(0)
                  );
                }}
                key={index}
                face={photo.url}
                name={photo.name}
              />
            ))}
          </ImgBoxContainer>
        </Items>
      </GiveContainer>
      ;
      <GiveMap types={types} id="map" />
    </>
  );
};

export default Give;
