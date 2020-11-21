import React, {useState} from 'react';
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll} from 'react-scroll'
import logo from './../../../styles/assets/img/logo-ecomy-1.png'
import {
    HeaderContainer,
    HeaderFixed,
    Logo,
    Navigation,
    List,
    ListItem,
    Title,
} from './styles';


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
                                <Link>Dla kogo</Link>
                            </Title>
                        </ListItem>
                        <ListItem>
                            <Title>
                                <Link>O nas</Link>
                            </Title>
                        </ListItem>
                        <ListItem>
                            <Title>
                                <Link>Kontakt</Link>
                            </Title>
                        </ListItem>
                    </List>
                </Navigation>
            </HeaderFixed>
        </HeaderContainer>
    );
};

export default Header;