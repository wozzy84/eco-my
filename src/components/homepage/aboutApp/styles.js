import styled from "styled-components";

export const AboutAppContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 2% 15% 10% 15%;
  background-color: #4b9382;
  @media (max-width: 360px) {
    flex-wrap: wrap;
  }
`;
export const AppContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 30%;
  background-color: #4b9382;
`;

export const ImgMain = styled.img`
  width: 20%;
  position: absolute;
  top: -20%;
  left: 20%;
`;

export const ImgCloud = styled.img`
  width: 35%;
  position: absolute;
  top: 20%;
  right: 30%;
`;

export const ImgCloudText = styled.div`
  width: 50%;
  font-size: 20px;
  position: absolute;
  top: 40%;
  left: 50%;
`;

export const ImgContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  padding-bottom: 5%;
  flex-direction: column;
  @media (max-width: 360px) {
    font-size: 12px;
  }
`;

export const ImgBox = styled.div``;

export const Img1 = styled.img`
  width: 220px;
`;
export const Img2 = styled.img`
  width: 220px;
`;
export const Img3 = styled.img`
  width: 220px;
`;

export const ImgText = styled.div`
  width: 210px;
  font-size: 14px;
  position: relative;
`;
