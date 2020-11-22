import React from "react";
import {GiveContainer, MapContainer, Map, ListPlaces, Place, PlaceText} from "./styles";
import {H3} from "../atoms/styles";
import Find from "../znajdzzbiorke/Find";

const GiveMap = ({types}) => {
  // const meds = [
  //   {
  //     adress: '3-go Maja',
  //     name: 'Apteka',
  //   },
  //   {
  //     adress: '11 Listopada',
  //     name: 'Apteka 2',
  //   },
  //   {
  //     adress: avatar,
  //     name: 'Apteka3',
  //   },
  // ];
  //
  // const electro = [
  //   {
  //     adress: '3-go Maja',
  //     name: 'elektro1',
  //   },
  //   {
  //     adress: '11 Listopada',
  //     name: 'elektro2',
  //   },
  //   {
  //     adress: 'Wiejska',
  //     name: 'elektro3',
  //   },
  //
  // ];
  //
  // const clothes = [
  //   {
  //     adress: '3-go Maja',
  //     name: 'Apteka',
  //   },
  //   {
  //     adress: '11 Listopada',
  //     name: 'Apteka 2',
  //   },
  //   {
  //     adress: 'Malinowa',
  //     name: 'Apteka3',
  //   },
  //
  // ];
  //
  // const caps = [
  //   {
  //     adress: '3-go Maja',
  //     name: 'Apteka',
  //   },
  //   {
  //     adress: '11 Listopada',
  //     name: 'Apteka 2',
  //   },
  //   {
  //     adress: 'Wiejska',
  //     name: 'Apteka3',
  //   },
  //
  // ];
  //
  // const toys = [
  //   {
  //     adress: '3-go Maja',
  //     name: 'Szop1',
  //   },
  //   {
  //     adress: '11 Listopada',
  //     name: 'Szop2',
  //   },
  //   {
  //     adress: 'Chełmska',
  //     name: 'Szop3',
  //   },
  //
  // ];

  // const handleCheck = ({type}) => {
  //   switch (type) {
  //     case 'electro':
  //       return (electro.map((electric, index) => (
  //         <Place
  //           key={index}
  //         ><PlaceText>{electric.name}</PlaceText></Place>
  //       )))
  //     case 'meds':
  //       return (meds.map((med, index) => (
  //         <Place
  //           key={index}
  //         ><PlaceText>{med.name}</PlaceText></Place>
  //       )))
  //
  //     case 'clothes':
  //       return (clothes.map((item, index) => (
  //         <Place
  //           key={index}
  //         ><PlaceText>{item.name}</PlaceText></Place>
  //       )))
  //
  //     case 'caps':
  //       return (caps.map((item, index) => (
  //         <Place
  //           key={index}
  //         ><PlaceText>{item.name}</PlaceText></Place>
  //       )))
  //
  //     case 'toys':
  //       return (toys.map((item, index) => (
  //         <Place
  //           key={index}
  //         ><PlaceText>{item.name}</PlaceText></Place>
  //       )))
  //     default:
  //       return null;
  //   }

  // }
  return (
    <>
      <GiveContainer>
        <H3>Zbiórki w Twojej okolicy</H3>
        <MapContainer>
          <Find types={types} />

        </MapContainer>
      </GiveContainer>;
    </>
  )
};

export default GiveMap;

