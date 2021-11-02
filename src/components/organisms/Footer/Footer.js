import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/atoms/Buttton/Button';
import {
  Wrapper,
  StyledTitle,
  StyledParagraph,
  StyledUl,
  StyledElement,
  StyledInput,
} from './Footer.styles';

const Footer = () => (
  <Wrapper>
    <StyledTitle color={'#303030  '}>strefa klienta</StyledTitle>
    <StyledUl>
      <StyledElement as={Link} to="#">
        FAQ
      </StyledElement>
      <StyledElement as={Link} to="#">
        Dostawa i płatność
      </StyledElement>
      <StyledElement as={Link} to="#">
        Zwroty i reklamacje
      </StyledElement>
      <StyledElement as={Link} to="#">
        Polityka prywatności
      </StyledElement>
      <StyledElement as={Link} to="#">
        Regulamin
      </StyledElement>
      <StyledElement as={Link} to="#">
        Kontakt
      </StyledElement>
    </StyledUl>
    <StyledTitle color={'#303030'}>Odwiedź nasz sklep</StyledTitle>
    <StyledParagraph>Kraków, ul. Limanowskiego 18</StyledParagraph>
    <br />
    <StyledParagraph>
      godziny otwarcia:
      <br />
      12.00 – 18.00 (pn – pt),
      <br /> 12.00 – 16.00 (sb)
    </StyledParagraph>
    <br />
    <StyledParagraph>tel. 504 865 233</StyledParagraph>
    <StyledTitle color={'#303030'}>newsletter</StyledTitle>
    <StyledParagraph>
      Zapisz się do naszego newslettera i bądź na bieżąco z nowościami.
    </StyledParagraph>
    <StyledInput type="email" placeholder="Podaj adres e-mail" />
    <Button
      width={'150px'}
      backgroundColor={'#d4e4d4'}
      backgroundColorHover={'#f3f3f3'}
      fontColorMain={'#303030'}
      fontColorHover={'#bbccbb'}
      borderColor={'#bbccbb'}
    >
      Zapisz się
    </Button>
  </Wrapper>
);

export default Footer;
