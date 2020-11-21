import styled from 'styled-components';

export const GiveContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  @media (max-width: 360px) {
    flex-wrap: wrap;
  }
    `

export const Items = styled.div`
 
    width: 100%;
    display: block;
    @media (max-width: 360px) {
      width: 30%;
 
  }
`;

export const Item = styled.div`
 
    width: 100%;
    display: block;
    @media (max-width: 360px) {
      width: 30%;
 
  }
`;

export const Img = styled.img`
 
    width: 30%;
    display: block;
    @media (max-width: 360px) {
      width: 30%;
 
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