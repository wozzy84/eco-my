import styled from 'styled-components';

export const GiveContainer = styled.div`
margin: 0 auto;
  width: 75%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 360px) {
    flex-wrap: wrap;
  }
    `

export const Items = styled.div`
    width: 100%;
    padding-top: 100px;
    display: flex;
    
    @media (max-width: 360px) {
      width: 30%;
  }
`;

export const ImgBoxContainer = styled.div`
  padding-top: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
 
  
  @media (max-width: 360px) {
    height: 80vh;
  }
`;
export const Img = styled.div`
width: 30%;
position: relative;

 img {
   width: 50%;
    @media (max-width: 360px) {
      width: 30%;
 
  }
 }
  :hover {
  cursor: pointer;
 
  }
`;

export const ImgTick = styled.img`
width: 50px;
position: absolute;
left:0;
top:-10px;
`


export const Button = styled.button`
  margin-top: 100px;
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