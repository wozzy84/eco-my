import styled from 'styled-components';
import img from '../../../../src/styles/assets/img/city-wroclove-gray-min.jpg';

export const JoinContainer = styled.div`
  width: 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${({isReverse}) => (isReverse ? 'row-reverse' : 'row')};
  @media (max-width: 360px) {
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const TextBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  @media (max-width: 360px) {
    width: 90%;
  }
`;

export const Text = styled.p`
  width: 70%;
  text-align: center;
  line-height: 25px;
  color:#fff;
  @media (max-width: 360px) {
    width: 90%;
  }
`;

export const Img = styled.div`
  width: 50%;
  height: auto;
  img {
    width: 100%;
  }

  @media (max-width: 360px) {
    padding: 30px 0;
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: #4b9382;
  display: flex;
  align-items: center;
  position: relative;
`;


