import styled from 'styled-components';

export const HeaderContainer = styled.div`
  max-width: 1600px;
  height: 80px;
  background-color: #f5f5f3;
  position: relative;
  width: 100%;
`;

export const HeaderFixed = styled.header`
  max-width: 1600px;
  height: 80px;
  width: 100%;
  display: flex;

  position: fixed;
  top: 0;
  background-color: #f5f5f3;

  transition: transform 0.5s ease;

  @media (max-width: 360px) {
    height: 60px;
  }
`;
export const Navigation = styled.nav`
  width: 100%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const List = styled.ul`
  display: flex;
  @media (max-width: 360px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  padding-left: 20px;
`;

export const Title = styled.div`
  position: relative;
  a {
    text-decoration: none;
    color: #313131;
    font-family: 'Source Sans Pro', sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.9em;
    display: block;
    padding: 10px 5px;
  }

  a:hover {
    color: rgb(90, 90, 90);
    cursor: pointer;
  }
  a::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgb(90, 90, 90);
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  a:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }

  @media (max-width: 360px) {
    font-size: 0.5em;
  }
`;

export const Logo = styled.div`
  width: 20%;
  img {
    padding: 10px 10px;
    height: 100%;
    margin: 5px 10px;
  }
`;
