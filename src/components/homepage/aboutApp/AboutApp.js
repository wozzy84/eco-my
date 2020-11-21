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
import {Span, SpanContainer, H3} from '../atoms/styles';
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
                    <H3 isSpecialFont isWhite isSmall isBold>
                        Znajdź miejsce dla swoich śmieci
                    </H3>
                    <ImgBox>
                        <Img1 src={mobileFirst} alt="" />
                    </ImgBox>
                    <ImgText>
                        <SpanContainer>
                            {' '}

                            <Span isWhite>
                                Niezależnie, czy są to przeterminowane leki, baterie, elektrośmieci, odpady niebezpieczne czy inne niestandardowe śmieci, znajdź miejsce w swojej okolicy, gdzie możesz je oddać.
                            </Span>
                        </SpanContainer>
                    </ImgText>
                </ImgContainer>
                <ImgContainer>
                    <ImgBox>
                        <H3 isSpecialFont isWhite isSmall isBold>
                            Zorganizuj zbiórkę
                        </H3>
                        <Img2
                            src={mobileFirst}
                            alt=""
                        />
                    </ImgBox>
                    <ImgText>
                        <SpanContainer>
                            <Span isWhite>
                                Nakrętki, puszki czy ubrania wreszcie znajdą odpowiednie miejsce czy nowego właściciela
                            </Span>

                        </SpanContainer>
                    </ImgText>
                </ImgContainer>
                <ImgContainer>
                    <H3 isSpecialFont isWhite isSmall isBold>
                        Sprawdź jak poprawnie segregować
                    </H3>
                    <ImgBox>
                        <Img3 src={mobileFirst} alt="" />
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
            </AboutAppContainer>
        </>
    );
};

export default AboutApp;
