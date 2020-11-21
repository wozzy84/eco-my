import React, {useState} from 'react';
import {Img, ImgTick} from './styles';
import { H3} from '../atoms/styles';
import tick from '../../styles/assets/img/leaf-green.png'

const ImgBox = ({face, name}) => {
    const [active, setActive] = useState(false);
    return (
        <>
                <Img onClick={()=> setActive(!active)} >
                    <img alt={name} src={face}/>
                    {active && <ImgTick alt='tick' src={tick}/>}

                    <H3>
                        {name}
                    </H3>

                </Img>

        </>
    );
};
export default ImgBox;