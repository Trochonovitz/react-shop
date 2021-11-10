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
  TextBox,
} from './Footer.styles';

const options = [
  'FAQ',
  'Dostawa i płatność',
  'Zwroty i reklamacje',
  'Polityka prywatności',
  'Regulamin',
  'Kontakt',
];

const Footer = () => (
  <Wrapper>
    <TextBox>
      <StyledTitle color={'#303030'}>strefa klienta</StyledTitle>
      <StyledUl>
        {options.map((option, index) => (
          <StyledElement key={`${option}${index}`} as={Link} to="#">
            {option}
          </StyledElement>
        ))}
      </StyledUl>
    </TextBox>
    <TextBox>
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
    </TextBox>
    <TextBox>
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
    </TextBox>
  </Wrapper>
);

export default Footer;
