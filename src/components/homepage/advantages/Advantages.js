import React from 'react';
import {H2, H3, Span} from '../atoms/styles';
import {
    AdvantagesContainer,
    ItemsWrapper,
    Icon,
    Item,
    Items,
    Text,
    List,
    ListItems,
    Wrapper,
} from './styles';
import houseImg from '../../../styles/assets/img/green_house.png';
import cityImg from '../../../styles/assets/img/greenCity.png';

const Advantages = () => {
    const titleLeft = 'Mieszkańców';
    const titleRight = 'Gmin';
    return (
        <AdvantagesContainer id="advantages">
            <H2 isWhite>Korzyści dla...</H2>
            <ItemsWrapper>
                <Items>
                    <Item>
                        <Wrapper>
                            <Icon src={houseImg} alt="mieszkancy" />
                            <H3 isWhite>{titleLeft}</H3>
                        </Wrapper>
                        <Text>
                            <ListItems>
                                <List>
                                    <Span isShort isBlock isWhite>
                                        Segregacja śmieci nie sprawi Ci już żadnej trudności.
                                        Wystarczy, że zeskanujesz kod kreskowy lub zrobisz zdjęcie
                                        produktu, a aplikacja pokaże Ci, do jakiego kosza powinien
                                        trafić{' '}
                                    </Span>
                                </List>
                                <List>
                                    <Span isShort isBlock isWhite>
                                        Łączysz przyjemne z pożytecznym - Dbasz o środowisko, a
                                        jednocześnie zdobywasz zniżki na wybrane produkty.
                                    </Span>
                                </List>
                                <List>
                                    <Span isShort isBlock isWhite>
                                        Zdobywasz łatwy dostęp do informacji na temat ekologicznego
                                        stylu życia
                                    </Span>
                                </List>
                            </ListItems>
                        </Text>
                    </Item>
                    <Item>
                        <Wrapper>
                            <Icon src={cityImg} alt="gminy" />

                            <H3 isWhite>{titleRight}</H3>
                        </Wrapper>
                        <Text>
                            <ListItems>
                                <List>
                                    <Span isShort isBlock isWhite>
                                        Poprawnie posortowane śmieci to wymierne korzyści finansowe.
                                        Za wywóz śmieci zmieszanych płacisz najwięcej. Warto więc
                                        zadbać, aby mieszkańcy Twojej gminy segregowali poprawnie
                                    </Span>
                                </List>
                            </ListItems>
                        </Text>
                    </Item>
                </Items>
            </ItemsWrapper>
        </AdvantagesContainer>
    );
};

export default Advantages;
