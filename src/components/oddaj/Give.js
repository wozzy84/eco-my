import React, {useState} from "react";
import {HonPage} from '../atoms/styles';
import {GiveContainer, Items, ImgBoxContainer, Button, Img} from './styles';
import ImgBox from "./ImgBox";
import {Link, animateScroll as scroll} from 'react-scroll';
import medsPhoto from '../../../src/styles/assets/img/categories/medicine.jpg';
import clothesPhoto from '../../../src/styles/assets/img/categories/fashion.png';
import plasticPhoto from '../../../src/styles/assets/img/categories/plastic-bottle-caps.jpg';
import batteriesPhoto from '../../styles/assets/img/categories/batteries.jpg';
import teddyBearPhoto from '../../styles/assets/img/categories/teddy-bear.jpg';
import GiveMap from "./GiveMap";
const Give= () => {
    // const [active, setActive] = useState(false);
    const [types, setTypes] = useState([]);
    const photos = [
        {
            url: medsPhoto,
            name: 'elektrośmieci',
            type: 'electro'
        },
        {
            url: medsPhoto,
            name: 'przeterminowane leki',
            type: 'meds'
        },
        {
            url: clothesPhoto,
            name: 'stare ubrania',
            type: 'clothes'
        },
        {
            url: plasticPhoto,
            name: 'nakrętki plastikowe',
            type: 'caps'
        },
        {
            url: batteriesPhoto,
            name: 'baterie',
            type: 'batteries'
        },
        {
            url: teddyBearPhoto,
            name: 'zabawki',
            type: 'toys'
        },
    ];

    return (
        <>
            <GiveContainer>
                <HonPage>Chcę oddać</HonPage>
                <Items>
                        <ImgBoxContainer>
                            {photos.map((photo, index) => (
                                <ImgBox
                                    clicked={(active) => {
                                      setTypes(active ? [...types, photo.type].slice(0) : types.filter(t => t !== photo.type).slice(0))
                                    }}
                                    key={index}
                                    face={photo.url}
                                    name={photo.name}
                                />
                            ))}
                        </ImgBoxContainer>
                </Items>
                {/*<Link to='map' activeClass='active' spy={true} smooth={true} duration={500}>*/}
                {/*    <Button onClick={()=> {*/}
                {/*      setActive(!active);*/}
                {/*      // if (!active) {*/}
                {/*      //   setPhoto(null);*/}
                {/*      // }*/}
                {/*    }}>*/}
                {/*    Wyszukaj </Button></Link>*/}
            </GiveContainer>;
            <GiveMap types={types} id='map'/>
        </>
        )
};

export default Give;
