import React, {useEffect} from 'react';
import {BannerContainer, BannerImg, Img} from './styles';
import {H1} from '../../atoms/styles';
import img from './../../../styles/assets/img/leaf-green.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);
    return (
        <>
            <BannerContainer>
                <BannerImg>
                    <H1 data-aos='fade-right'>Nie wyrzucaj pieniędzy na śmieci!</H1>
                    <Img src={img} data-aos='fade-right'/>
                </BannerImg>
            </BannerContainer>
        </>
    );
};

export default Banner;