import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from '../../molecules/Hamburger/Hamburger';
import { ScrollPositionContext } from 'pages/HomePage/HomePage';
import {
  Wrapper,
  NavigationElement,
  StyledSlideOut,
  Logo,
  NavigationWrapper,
  Icon,
  WrapperAbsolute,
  NavbarCloseButton,
  ListElements,
} from './Navigation.styles';

const options = [
  'sklep',
  'kalendarze 2022',
  'nowości',
  'o nas',
  'nasza kolekcja',
  'blog',
  'kontakt',
  'moje konto',
];

const Navigation = ({ isVisible, setVisibility }) => {
  const scrollPosition = useContext(ScrollPositionContext);

  return (
    <Wrapper>
      <WrapperAbsolute scrollPosition={scrollPosition}>
        <Hamburger onClick={() => setVisibility({ mobileNav: true })} />
        <StyledSlideOut isVisible={isVisible} from={'left'}>
          <ListElements isVisible={isVisible}>
            <NavbarCloseButton
              onClick={() => setVisibility({ mobileNav: false })}
            >
              X
            </NavbarCloseButton>
            {options.map((option, index) => (
              <NavigationElement
                as={NavLink}
                scrollPosition={scrollPosition}
                // to={option.replace(/ /g, '-')}
                to={'products'}
                key={`${option}${index}`}
              >
                {option}
              </NavigationElement>
            ))}
          </ListElements>
        </StyledSlideOut>
        <Logo as={NavLink} to="/" scrollPosition={scrollPosition}>
          Papierniczeni
        </Logo>
        <NavigationWrapper>
          <Icon scrollPosition={scrollPosition}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
          </Icon>
          <Icon scrollPosition={scrollPosition}>
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
          <Icon
            onClick={() => setVisibility({ basket: true })}
            scrollPosition={scrollPosition}
          >
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
      </WrapperAbsolute>
    </Wrapper>
  );
};

export default Navigation;
