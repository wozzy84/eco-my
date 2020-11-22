import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../../styles/assets/img/logo-ecomy-1.png";
import history from "../../../";
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
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
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
                <Link to="/oddaj">Oddaj</Link>
              </Title>
            </ListItem>
            <ListItem>
              <Title>
                <Link to="/znajdz">Znajdź</Link>
              </Title>
            </ListItem>
            <ListItem>
              <Title>
                <Link to="/dodaj-zbiorke">Zorganizuj</Link>
              </Title>
            </ListItem>
          </List>
        </Navigation>
      </HeaderFixed>
    </HeaderContainer>
  );
};

export default Header;
