import React from 'react';
import {JoinContainer, Box} from './styles';
import {H4} from '../../atoms/styles';
import BoxItems from './BoxItems';
import imgFirst from '../../../styles/assets/img/group-volunteers-joining_01a.jpg';
import imgSecond from '../../../styles/assets/img/618_01a-min.jpg';
import {Img, TitleContainer} from "../product/styles";
import img from "../../../styles/assets/img/leaf-white.png";

const Join = () => {
    const titleFirst = 'Jestem mieszkańcem';
    const titleSecond = 'Jestem z gminy /przedsiębiorstwa komunalnego';
    const textFirst =
        'Interesujesz się ekologią i chciałbyś otrzymywać najnowsze informacje o naszym projekcie i nowinki ze świata less waste? Zapisz się do newslettera. Obiecujemy, że nie będziemy spamować Twojej skrzynki!';
    const textSecond =
        'Chciałbyś wprowadzić nasze rozwiązanie w swojej gminie? Bardzo się cieszymy – Napisz do nas na ecoMyApp@gmail.com!';
    const buttonTextFirst = 'Chcę być na bieżąco';
    const buttonTextSecond = 'Napisz do nas';

    return (
        <JoinContainer>
            <TitleContainer >
                <H4 isWhite data-aos="fade-up" >
                  Dołącz do społeczności ecomy i zobacz jak łatwo jest żyć ekologicznie!
                </H4>
                <Img src={img} data-aos="fade-up"/>
            </TitleContainer>
            <Box>
                <BoxItems
                    title={titleFirst}
                    text={textFirst}
                    btnText={buttonTextFirst}
                    img={imgFirst}
                />
            </Box>
            <Box isReverse>
                <BoxItems
                    title={titleSecond}
                    text={textSecond}
                    btnText={buttonTextSecond}
                    img={imgSecond}
                />
            </Box>
        </JoinContainer>
    );
};

export default Join;
