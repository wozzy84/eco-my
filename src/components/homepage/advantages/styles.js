import styled from 'styled-components';
import img from '../../../../src/styles/assets/img/city-wroclove-gray.jpg';
import leafImg from '../../../styles/assets/img/leaf-white.png';

export const AdvantagesContainer = styled.div`
  width: 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  color: #fff;
  padding-top: 50px;
`;

export const ItemsWrapper = styled.div`
  width: 68%;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 12%;
`;

export const Items = styled.div`
  display: flex;
  padding-top: 2%;
  margin: 0 auto;
  @media (max-width: 360px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 360px) {
    width: 90%;
  }
`;

export const Icon = styled.img`
  display: block;
  width: 30%;
  margin-left: 0;
  filter: invert(52%) sepia(35%) saturate(460%) hue-rotate(116deg)
    brightness(92%) contrast(93%);

  @media (max-width: 360px) {
    width: 30%;
  }
`;
export const Text = styled.div`
  padding-top: 20px;
  padding-bottom: 150px;
  width: 100%;
  font-size: 18px;
  line-height: 26px;
  @media (max-width: 360px) {
    font-size: 13px;
  }
`;

export const ListItems = styled.ul`
  width: 100%;
`;

export const List = styled.li`
  margin: 0;
  padding: 0 5px 20px 10px;
  list-style: none;
  background-image: url('${leafImg}');
  background-repeat: no-repeat;
  background-position: left 10%;
  background-size: 20px;
  width: 100%;
`;
