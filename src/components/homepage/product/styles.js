import styled from 'styled-components';
import img from './../../../../src/styles/assets/img/different-recyclable-trash-pouring-garbage-can.jpg';

export const ProductContainer = styled.div`
  width: 100%;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: #4b9382;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Box = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 360px) {
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const TextBox = styled.div`
  width: 50%;
  position: absolute;
  top: 46%;
  left: 30%;
  @media (max-width: 360px) {
    width: 90%;
  }
`;

export const Text = styled.p`
  width: 60%;
  text-align: left;
  line-height: 25px;
  font-size: 18px;
  @media (max-width: 360px) {
    width: 90%;
  }
`;

export const Img = styled.img`
  height: auto;
  position: absolute;
  left: 65%;
  top: 55%;

  @media (max-width: 360px) {
    padding: 30px 0;
    width: 100%;
  }
`;
