import React from 'react';
import {H3} from '../../atoms/styles';
import {Img, Text, TextBox} from './styles';

const BoxItems = ({title, text, img}) => {
    return (
        <>
            <TextBox>
                <H3 isWhite>{title}</H3>
                <Text>{text}</Text>
            </TextBox>
            <Img>
                <img src={img} />
            </Img>
        </>
    );
};

export default BoxItems;
