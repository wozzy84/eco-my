import React from 'react';
import {BannerContainer, BannerImg, Img} from './styles';
import {H1} from '../atoms/styles';
import img from './../../../styles/assets/img/leaf-green.png';

const Banner = () => {
    return (
        <>
            <BannerContainer>
                <BannerImg>
                    <H1>Nie wyrzucaj pieniędzy na śmieci!</H1>
                    <Img src={img} />
                </BannerImg>
            </BannerContainer>
        </>
    );
};

export default Banner;