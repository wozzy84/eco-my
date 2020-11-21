import React from 'react';
import {Img} from './styles';
import { H3} from '../atoms/styles';

const ImgBox = ({face, name}) => {
    return (
        <>
                <Img >
                    <img alt={name} src={face}/>
                    <H3>
                        {name}
                    </H3>

                </Img>

        </>
    );
};
export default ImgBox;