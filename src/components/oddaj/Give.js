import React from "react";
import {HonPage} from '../atoms/styles';
import {GiveContainer, Items, ImgBoxContainer, Button} from './styles'
import ImgBox from "../znajdzzbiorke/ImgBox";
const Give= () => {
    const photos = [
        {
            url: require('../../../src/styles/assets/img/panda-AVATAR.png'),
            name: 'mordka 1',
        },
        {
            url: require('../../../src/styles/assets/img/panda-AVATAR.png'),
            name: 'mordka 2',
        },
        {
            url: require('../../../src/styles/assets/img/panda-AVATAR.png'),
            name: 'mordka 3',
        },
        {
            url: require('../../../src/styles/assets/img/panda-AVATAR.png'),
            name: 'mordka 4',
        },
        {
            url: require('../../../src/styles/assets/img/panda-AVATAR.png'),
            name: 'mordka 5',
        },
        {
            url: require('../../../src/styles/assets/img/panda-AVATAR.png'),
            name: 'mordka 6',
        },
        {
            url: require('../../../src/styles/assets/img/panda-AVATAR.png'),
            name: 'mordka 7',
        },
        {
            url: require('../../../src/styles/assets/img/panda-AVATAR.png'),
            name: 'mordka 8',
        },
    ];

    return (
        <>
            <GiveContainer>
                <HonPage>'Chcę oddać"</HonPage>
                <Items>

                        <ImgBoxContainer>
                            {photos.map((person, index) => (
                                <ImgBox
                                    key={index}
                                    face={person.url}
                                    name={person.name}
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
