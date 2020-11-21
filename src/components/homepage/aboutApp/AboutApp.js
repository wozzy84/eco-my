import React from 'react';
import {
    AboutAppContainer,
    AppContainer,
    ImgBox,
    Img1,
    Img2,
    Img3,
    ImgText,
    ImgContainer,
    ImgMain,
    ImgCloud,
    ImgCloudText,
} from './styles';
import {Span, SpanContainer} from '../atoms/styles';
import imgBig from '../../../../src/styles/assets/img/app-main.png';
import imgSmall from '../../../styles/assets/img/cloud.png';
import mobileFirst from '../../../styles/assets/img/scan-view.png';

const AboutApp = () => {
    return (
        <>
            <AppContainer>
                <ImgMain src={imgBig} />
                <ImgCloud src={imgSmall} />
                <ImgCloudText>
                    <Span isBlock>Mamy na to sposób. </Span>
                    <Span isBlock isWhite isBold>
                        Aplikacja EcoMy{' '}
                    </Span>
                    <Span isBlock> pokaże Ci, jak segregować </Span>
                    <Span isBlock>i... oszczędzić. Jak? </Span>
                </ImgCloudText>
            </AppContainer>
            <AboutAppContainer>
                <ImgContainer>
                    <ImgBox>
                        <Img1 src={mobileFirst} alt="" />
                    </ImgBox>
                    <ImgText>
                        <SpanContainer>
                            {' '}
                            <Span isBlock isBold isWhite>
                                Zeskanuj kod kreskowy{' '}
                            </Span>{' '}
                            <Span isWhite>lub </Span>
                            <Span isBold isWhite>
                                zrób zdjęcie{' '}
                            </Span>
                            <Span isWhite>
                                produktu – nasza aplikacja pokaże ci, gdzie wyrzucić dane
                                opakowanie
                            </Span>
                        </SpanContainer>
                    </ImgText>
                </ImgContainer>
                <ImgContainer>
                    <ImgBox>
                        <Img2
                            src={mobileFirst}
                            alt=""
                        />
                    </ImgBox>
                    <ImgText>
                        <SpanContainer>
                            <Span isWhite>
                                Zbieraj punkty za skanowanie i wymieniaj je na zniżki na{' '}
                            </Span>
                            <Span isBold isWhite>
                                produkty zero waste{' '}
                            </Span>{' '}
                            <Span isWhite>
                                lub usługi u naszych partnerów. Po prostu – zbieraj punkty i
                                wymieniaj je na atrakcyjne nagrody
                            </Span>
                        </SpanContainer>
                    </ImgText>
                </ImgContainer>
                <ImgContainer>
                    <ImgBox>
                        <Img3 src={mobileFirst} alt="" />
                    </ImgBox>
                    <ImgText>
                        <SpanContainer>
                            <Span isWhite>Monitoruj swój </Span>
                            <Span isBold isWhite>
                                ślad węglowy
                            </Span>
                            <Span isWhite>
                                . Dzięki naszym podsumowaniom z łatwością zobaczysz, jak
                                ekologiczne są Twoje zakupy. Pokażemy Ci też, co kupować, aby
                                wywierać jak najmniejszy negatywny wpływ na środowisko
                            </Span>
                        </SpanContainer>
                    </ImgText>
                </ImgContainer>
            </AboutAppContainer>
        </>
    );
};

export default AboutApp;
