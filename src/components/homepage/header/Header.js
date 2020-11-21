import React, { useState } from "react";
import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "./../../../styles/assets/img/logo-ecomy-1.png";
import history from "../../../browserHistory";
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
                <Link>Oddaj</Link>
              </Title>
            </ListItem>
            <ListItem>
              <Title>
                <Link>Znajdź</Link>
              </Title>
            </ListItem>
            <ListItem>
              <Title>
                <Link
                  onClick={() => {
                    history.push("/dodaj-zbiorke");
                  }}
                >
                  Zorganizuj
                </Link>
              </Title>
            </ListItem>
          </List>
        </Navigation>
      </HeaderFixed>
    </HeaderContainer>
  );
};

export default Header;
