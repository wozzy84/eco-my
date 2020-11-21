import React from 'react';
import {JoinContainer, Box} from './styles';
import {H2} from '../atoms/styles';
import BoxItems from './BoxItems';
import imgFirst from '../../../styles/assets/img/group-volunteers-joining_01a.jpg';
import imgSecond from '../../../styles/assets/img/618_01a.jpg';

const Join = () => {
    const titleFirst = 'Jestem mieszkańcem';
    const titleSecond = 'Jestem z gminy /przedsiębiorstwa komunalnego';
    const textFirst =
        'Interesujesz się ekologią i chciałbyś otrzymywać najnowsze informacje o naszym projekcie i nowinki ze świata less waste? Zapisz się do newslettera. Obiecujemy, że nie będziemy spamować Twojej skrzynki!';
    const textSecond =
        'Chciałbyś wprowadzić nasze rozwiązanie w swojej gminie? Bardzo się cieszymy – Napisz do nas na EcoMYApp@gmail.com!';
    const buttonTextFirst = 'Chcę być na bieżąco';
    const buttonTextSecond = 'Napisz do nas';

    return (
        <JoinContainer>
            <H2>
                Dołącz do społeczności EcoMY i przekonaj się, że śmieć to pieniądz
            </H2>
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
