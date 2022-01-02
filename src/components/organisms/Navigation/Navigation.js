import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
  StyledSVG,
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
  const [isHover, setHover] = useState(false);
  const scrollPosition = useContext(ScrollPositionContext);
  const location = useLocation().pathname;
  const state = useSelector((store) => store?.basket);

  return (
    <Wrapper>
      <WrapperAbsolute
        scrollPosition={scrollPosition}
        isAbsolute={location.length === 1}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        isHover={isHover}
      >
        <Hamburger
          onClick={() => setVisibility({ mobileNav: true })}
          isHover={isHover}
        />
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
                to={'#'}
                key={`${option}${index}`}
                isHover={isHover}
              >
                {option}
              </NavigationElement>
            ))}
          </ListElements>
        </StyledSlideOut>
        <Logo
          as={NavLink}
          to="/"
          scrollPosition={scrollPosition}
          isHover={isHover}
        >
          Papierniczeni
        </Logo>
        <NavigationWrapper>
          <Icon scrollPosition={scrollPosition} isHover={isHover}>
            <StyledSVG
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </StyledSVG>
          </Icon>
          <Icon scrollPosition={scrollPosition} isHover={isHover}>
            <StyledSVG
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </StyledSVG>
          </Icon>

          <Icon
            onClick={() => setVisibility({ basket: true })}
            scrollPosition={scrollPosition}
            isHover={isHover}
          >
            {state.length > 0 ? (
              <StyledSVG
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-bag-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </StyledSVG>
            ) : (
              <StyledSVG
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </StyledSVG>
            )}
          </Icon>
        </NavigationWrapper>
      </WrapperAbsolute>
    </Wrapper>
  );
};

export default Navigation;
