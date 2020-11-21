import React from "react";
import {HonPage, H3} from '../atoms/styles';
import {GiveContainer, Items, Item, Button} from './styles'

const Give= () => {


    return (
        <>
            <GiveContainer>
                <HonPage>'Chcę oddać"</HonPage>
                <Items>
                    <Item>
                        {/*<Img></Img>*/}
                        <H3>coś tam</H3>
                    </Item>
                </Items>
                <Button>Znajdz</Button>
            </GiveContainer>;
        </>
        )

};

export default Give;
