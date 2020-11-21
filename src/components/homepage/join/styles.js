import styled from 'styled-components';

export const JoinContainer = styled.div`
  width: 100%;
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
  align-content: center;
  @media (max-width: 360px) {
    width: 90%;
  }
`;

export const Text = styled.p`
  width: 70%;
  text-align: center;
  line-height: 25px;
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

export const Button = styled.button`
  margin-top: 20px;
  width: 200px;
  padding: 15px 10px;
  background-color: #319842;
  color: #fff;
  border-radius: 2em;
  font-size: 16px;
  letter-spacing: 1px;
  :hover {
    cursor: pointer;
    background-color: #4fc663;
  }
`;
