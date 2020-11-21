import React from "react";
import {GiveContainer,MapContainer, Map, ListPlaces } from "./styles";
import {H3} from "../atoms/styles";
import avatar from "../../styles/assets/img/panda-AVATAR.png";


const GiveMap= () => {
    // const meds = [
    //     {
    //         adress: '3-go Maja',
    //         name: 'Apteka',
    //     },
    //     {
    //         adress: '11 Listopada',
    //         name: 'Apteka 2',
    //     },
    //     {
    //         adress: avatar,
    //         name: 'Apteka3',
    //     },
    //
    //
    // ];


    return (
        <>
            <GiveContainer>
                <H3>Zbiórki w Twojej okolicy</H3>
<MapContainer>
    {/*<Map></Map>*/}
    {/*<ListPlaces></ListPlaces>*/}

</MapContainer>
            </GiveContainer>;
        </>
    )

};

export default GiveMap;