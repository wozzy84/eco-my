import React from 'react';
import {
    ProductContainer,
    Box,
    TextBox,
    Text,
    Img,
    TitleContainer,
} from './styles';
import {H4, Span} from '../atoms/styles';
import img from './../../../styles/assets/img/leaf-white.png';

const Product = () => {
    return (
        <>
            <ProductContainer>
                <TitleContainer>
                    <H4 isWhite>
                        Jeśli częściej niż "Wstrząśnięte czy zmieszane?", zdarza Ci się
                        pytać "Zmieszane czy plastik?", witaj w klubie!
                    </H4>
                    <Img src={img} />
                </TitleContainer>

                <Box>
                    <TextBox>
                        <Text>
                            Dane wskazują, że Polakom zależy na recyklingu - prawie 2/3
                            mieszkańców deklaruje, że segreguje śmieci, ale jedynie co szósty
                            z nas wie, gdzie powinno trafić każde z opakowań. Z tego powodu
                            jedynie 33% odpadów poddanych zostaje recyklingowi…
                        </Text>
                    </TextBox>
                </Box>
            </ProductContainer>
        </>
    );
};
export default Product;