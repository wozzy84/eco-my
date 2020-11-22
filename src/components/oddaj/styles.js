import styled from 'styled-components';

export const GiveContainer = styled.div`

max-width:1600px;
margin: 0 auto;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #282c34;
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
   width: 60%;
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
  background-color: #4b9382;
  color: #fff;
  border-radius: 2em;
  font-size: 16px;
  letter-spacing: 1px;
  :hover {
    cursor: pointer;
    background-color: #4fc663;
  }
`;

export const MapContainer = styled.div`
width:100%;
`

export const Map = styled.div`
width:50%;
`

export const ListPlaces = styled.ul`
width:50%;
`
export const Place = styled.li`
width:50%;
list-style: none;
display: block;
height: 250px;
border: solid 2px #4b9382;

`

export const PlaceText = styled.p`
width:50%;
`