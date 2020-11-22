import React, {useState} from 'react';
import {Img, ImgTick} from './styles';
import {H3} from '../atoms/styles';
import tick from '../../styles/assets/img/ptaszek-02-min.png'

const ImgBox = ({face, name, clicked}) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Img onClick={() => {
        setActive(!active);
        clicked(!active);
      }}>
        <img alt={name} src={face}/>
        {active && <ImgTick alt='tick' src={tick}/>}

        <H3 isSpecialFont>
          {name}
        </H3>
      </Img>
    </>
  );
};
export default ImgBox;
