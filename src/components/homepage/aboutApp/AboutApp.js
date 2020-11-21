import React, { useEffect } from "react";
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
} from "./styles";
import { Span, SpanContainer, H3 } from "../atoms/styles";
import imgBig from "../../../styles/assets/img/app-main.png";
import imgSmall from "../../../styles/assets/img/cloud.png";
import mobileFirst from "../../../styles/assets/img/scan-view.png";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutApp = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <>
      <AppContainer>
        <ImgMain data-aos="fade-up" src={imgBig} />
        <ImgCloud data-aos="fade-up" src={imgSmall} />
        <ImgCloudText data-aos="fade-up">
          <Span isBlock isBig>
            Mamy na to sposób.{" "}
          </Span>
          <Span isBlock isWhite isBold isBig>
            Aplikacja EcoMy{" "}
          </Span>
          <Span isBig isBlock>
            {" "}
            pokaże Ci, jak segregować{" "}
          </Span>
          <Span isBig isBlock>
            i... oszczędzić. Jak?{" "}
          </Span>
        </ImgCloudText>
      </AppContainer>
      <AboutAppContainer>
        <ImgContainer data-aos="fade-up">
          <H3 isSpecialFont isWhite isSmall isBold>
            Znajdź miejsce dla swoich śmieci
          </H3>
          <ImgBox>
            <Img1 src={mobileFirst} alt="" />
          </ImgBox>
          <ImgText>
            <SpanContainer>
              {" "}
              <Span isWhite>
                Niezależnie, czy są to przeterminowane leki, baterie,
                elektrośmieci, odpady niebezpieczne czy inne niestandardowe
                śmieci, znajdź miejsce w swojej okolicy, gdzie możesz je oddać.
              </Span>
            </SpanContainer>
          </ImgText>
        </ImgContainer>
        <ImgContainer data-aos="fade-up">
          <ImgBox>
            <H3 isSpecialFont isWhite isSmall isBold>
              Zorganizuj zbiórkę
            </H3>
            <Img2 src={mobileFirst} alt="" />
          </ImgBox>
          <ImgText>
            <SpanContainer>
              <Span isWhite>
                Nakrętki, puszki czy ubrania wreszcie znajdą odpowiednie miejsce
                czy nowego właściciela
              </Span>
            </SpanContainer>
          </ImgText>
        </ImgContainer>
        <ImgContainer data-aos="fade-up">
          <H3 isSpecialFont isWhite isSmall isBold>
            Sprawdź jak poprawnie segregować
          </H3>
          <ImgBox>
            <Img3 src={mobileFirst} alt="" />
          </ImgBox>
          <ImgText>
            <SpanContainer>
              {" "}
              <Span isBlock isBold isWhite>
                Zeskanuj kod kreskowy{" "}
              </Span>{" "}
              <Span isWhite>lub </Span>
              <Span isBold isWhite>
                zrób zdjęcie{" "}
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
