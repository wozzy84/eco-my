import React from 'react';
import {H3} from '../../atoms/styles';
import {Img, Text, TextBox, Button} from './styles';

const BoxItems = ({title, text, btnText, img}) => {
    return (
        <>
            <TextBox>
                <H3>{title}</H3>
                <Text>{text}</Text>
                <Button>{btnText}</Button>
            </TextBox>
            <Img>
                <img src={img} />
            </Img>
        </>
    );
};

export default BoxItems;
