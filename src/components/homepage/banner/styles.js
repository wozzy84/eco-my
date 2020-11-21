import styled from 'styled-components';
import img from '../../../../src/styles/assets/img/front-view-woman_01a.jpg';

export const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 80px;
  left: 0;

  @media (max-width: 360px) {
    height: 80vh;
  }
`;

export const BannerImg = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 713px;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 360px) {
    background-position: 10% 90%;
    background-attachment: local;
  }
`;

export const Img = styled.img`
  position: absolute;
  top: 60%;
  left: 40%;
`;