import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
import { Span, SpanContainer, H3 } from "../../atoms/styles";
import imgBig from "../../../styles/assets/img/app-main-min.png";
import imgSmall from "../../../styles/assets/img/cloud-min.png";
import mobileMap from "../../../styles/assets/img/app-view1.png";
import mobileOrganize from "../../../styles/assets/img/app-view-organize.png";
import mobileScan from "../../../styles/assets/img/scan-view-min.png";
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
          <Span isBig isWhite>
            ecoMY{" "}
          </Span>
          <Span isBig >
            pomoże Ci{" "}
          </Span>
          <Span isBig isBlock>
            ekologicznie zarządzać {" "}
          </Span>
          <Span isBig isBlock>
           Twoimi śmieciami, a przy{" "}
          </Span>
          <Span isBig isBlock>
           okazji pomagać innym i{" "}
          </Span>
          <Span isBig isBlock>
            Planecie{" "}
          </Span>
        </ImgCloudText>
      </AppContainer>
      <AboutAppContainer>
        <ImgContainer data-aos="fade-up">
          <Link to="/oddaj">
          <H3 isSpecialFont isWhite isSmall isBold>
            Znajdź miejsce dla swoich śmieci
          </H3>
          </Link>

          <ImgBox>
            <Link to="/oddaj">

            <Img1 src={mobileMap} alt="" />
            </Link>
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
          <Link to="/dodaj-zbiorke">

          <H3 isSpecialFont isWhite isSmall isBold>
            Zorganizuj zbiórkę
          </H3>
          </Link>
          <ImgBox>
            <Link to="/dodaj-zbiorke">

            <Img2 src={mobileOrganize} alt="" />
            </Link>
          </ImgBox>
          <ImgText>
            <SpanContainer>
              <Span isWhite>
                Zaangażuj się i zaproś innych do oddawania odpadów, razem działamy na rzecz naszego miasta i lokalnej społeczności.
              </Span>
            </SpanContainer>
          </ImgText>
        </ImgContainer>
        <ImgContainer data-aos="fade-up">
          <H3 isSpecialFont isWhite isSmall isBold>
            Sprawdź jak poprawnie segregować
          </H3>
          <ImgBox>

            <Img3 src={mobileScan} alt="" />
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
