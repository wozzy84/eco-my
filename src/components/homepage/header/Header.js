import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../../styles/assets/img/logo-ecomy-1.png";
import {
  HeaderContainer,
  HeaderFixed,
  Logo,
  Navigation,
  List,
  ListItem,
  Title,
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderFixed>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <Navigation>
          <List>
            <ListItem>
              <Title>
                <Link>O aplikacji</Link>
              </Title>
            </ListItem>
            <ListItem>
              <Title>
                <Link to="/oddaj">Oddaj śmieci</Link>
              </Title>
            </ListItem>
            <ListItem>
              <Title>
                <Link to="/znajdz">Znajdź zbiórkę</Link>
              </Title>
            </ListItem>
            <ListItem>
              <Title>
                <Link to="/dodaj-zbiorke">Zorganizuj zbiórkę</Link>
              </Title>
            </ListItem>
          </List>
        </Navigation>
      </HeaderFixed>
    </HeaderContainer>
  );
};

export default Header;
