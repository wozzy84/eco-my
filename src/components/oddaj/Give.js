import React from "react";
import {HonPage} from '../atoms/styles';
import {GiveContainer, Items, ImgBoxContainer, Button} from './styles'
import ImgBox from "./ImgBox";
import avatar from '../../../src/styles/assets/img/panda-AVATAR.png'
const Give= () => {
    const photos = [
        {
            url: avatar,
            name: 'mordka 1',
        },
        {
            url: avatar,
            name: 'mordka 2',
        },
        {
            url: avatar,
            name: 'mordka 3',
        },
        {
            url: avatar,
            name: 'mordka 4',
        },
        {
            url: avatar,
            name: 'mordka 5',
        },
        {
            url: avatar,
            name: 'mordka 6',
        },

    ];

    return (
        <>
            <GiveContainer>
                <HonPage>'Chcę oddać"</HonPage>
                <Items>
                        <ImgBoxContainer>
                            {photos.map((photo, index) => (
                                <ImgBox
                                    key={index}
                                    face={photo.url}
                                    name={photo.name}
                                />
                            ))}
                        </ImgBoxContainer>
                </Items>
                <Button>Znajdz</Button>

            </GiveContainer>;
        </>
        )

};

export default Give;
