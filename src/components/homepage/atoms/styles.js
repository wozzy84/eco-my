import styled, {createGlobalStyle} from 'styled-components';
import '../../../styles/assets/fonts/fonts.css'

export const GlobalStyle = createGlobalStyle`

body {
padding: 0;
margin: 0 auto;
font-family: 'Roboto',serif;
max-width: 1600px;
  background-color: #fffffe;
}

*, *::before, *::after {
box-sizing: border-box;
padding: 0;
margin: 0 auto;
}   
    @media (max-width: 640px) {
    max-width: 640px;
  }
  
`;
export const Container = styled.div``;

export const Span = styled.span`
  font-weight: ${({isBold}) => (isBold ? '700' : '400')};
  display: ${({isBlock}) => (isBlock ? 'block' : 'inline')};
  text-align: left;
  display: ${({isBlock}) => (isBlock ? 'block' : 'inline')};
  color: ${({isWhite}) => (isWhite ? '#fff' : 'rgb(70, 70, 70)')};
  width: ${({isShort}) => (isShort ? '80%' : '100%')};
`;
export const SpanContainer = styled.div`
  position: absolute;
  left: 20px;
`;
export const H1 = styled.h1`
  position: absolute;
  left: 20%;
  font-size: 68px;
  color: #4b9382;
  font-family: 'Mali', cursive;
  font-weight: 700;
  margin-top: 200px;
  display: block;
  width: 30%;

  @media (max-width: 360px) {
    font-size: 32px;
  }
`;

export const H2 = styled.h2`
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 400;
  font-family: ${({isSpecialFont}) =>
    isSpecialFont ? `'Mali', cursive` : `'Roboto'`};
  line-height: 48px;
  text-align: left;
  color: ${({isWhite}) => (isWhite ? '#fff' : 'rgb(48, 49, 51)')};
  text-transform: ${({isUpper}) => (isUpper ? 'uppercase' : 'unset')};
  display: block;
  padding: 1% 1% 1% 20%;

  @media (max-width: 1024px) {
    font-size: 28px;
  }
`;

export const H3 = styled.h3`
  font-size: 25px;
  font-weight: 400;
  font-family: 'Roboto',serif;
  line-height: 25px;
  text-align: left;
  color: ${({isWhite}) => (isWhite ? '#fff' : 'rgb(48, 49, 51)')};
  padding-bottom: 20px;
  padding-top: 20px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const H4 = styled.h4`
  font-size: 28px;
  font-weight: 400;
  font-family: 'Mali', cursive;
  line-height: 48px;
  text-align: left;
  color: ${({isWhite}) => (isWhite ? '#fff' : 'rgb(48, 49, 51)')};
  text-transform: uppercase;
  padding-bottom: 50px;
  padding-top: 20px;
  display: block;
  width: 50%;
  position: absolute;
  left: 20%;
  @media (max-width: 1024px) {
    font-size: 28px;
  }
`;
