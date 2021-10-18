import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Wrapper,
  StyledHeader,
  StyledUl,
  CloseButton,
  Logo,
  NavigationWrapper,
  Icon,
} from './Navigation.styles';
import Hamburger from '../../molecules/Hamburger/Hamburger';

const Navigation = () => {
  const [isVisible, setVisibility] = useState(false);

  return (
    <Wrapper>
      <Hamburger isVisible={isVisible} onClick={() => setVisibility(true)} />
      <StyledUl isVisible={isVisible}>
        <CloseButton onClick={() => setVisibility(false)}>X</CloseButton>
        <StyledHeader as={NavLink} to="/">
          Sklep
        </StyledHeader>
        <StyledHeader as={NavLink} to="/#">
          Kalendarze 2022
        </StyledHeader>
        <StyledHeader as={NavLink} to="/#">
          Nowości
        </StyledHeader>
        <StyledHeader as={NavLink} to="/#">
          O nas
        </StyledHeader>
        <StyledHeader as={NavLink} to="/#">
          Nasza kolekcja
        </StyledHeader>
        <StyledHeader as={NavLink} to="/#">
          Blog
        </StyledHeader>
        <StyledHeader as={NavLink} to="/#">
          Kontakt
        </StyledHeader>
        <StyledHeader as={NavLink} to="/#">
          Moje konto
        </StyledHeader>
      </StyledUl>

      <Logo>Papierniczeni</Logo>

      <NavigationWrapper>
        <Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </Icon>
        <Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bag"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
        </Icon>
      </NavigationWrapper>
    </Wrapper>
  );
};

export default Navigation;
