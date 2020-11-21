import React from 'react';
import {Img, ImgContainer} from './styles';
import { H3} from '../atoms/styles';

const ImgBox = ({face, name}) => {
    return (
        <>
            <ImgContainer>
                <Img>
                    <img alt={name} src={face} />
                </Img>
                <H3>
                    {name}
                </H3>
            </ImgContainer>
        </>
    );
};
export default ImgBox;