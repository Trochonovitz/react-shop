import React, { useContext, useState, forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  openBasket,
  openMobileNav,
  closeMobileNav,
  openSearchBar,
} from 'store/navigation';
import { icons } from 'theme/theme';
import Icon from 'components/atoms/Icon/Icon';
import Hamburger from 'components/molecules/Hamburger/Hamburger';
import { ScrollPositionContext } from 'pages/HomePage/HomePage';
import {
  Wrapper,
  NavigationElement,
  StyledSlideOut,
  Logo,
  NavigationWrapper,
  NavbarCloseButton,
  ListElements,
  StyledLink,
  StyledIcon,
} from './Navigation.styles';

const Navigation = forwardRef((props, ref) => {
  const [isHover, setHover] = useState(false);
  const dispatch = useDispatch();
  const scrollPosition = useContext(ScrollPositionContext);
  const products = useSelector((store) => store.basket.basket);
  const mobileNavState = useSelector((store) => store.nav.mobileNav);
  const searchBarState = useSelector((store) => store.nav.searchBar);
  const options = ['sklep', 'o nas', 'blog', 'kontakt', 'moje konto'];
  const hoverOnMouseEnter = () => setHover(true);
  const hoverOnMouseLeave = () => setHover(false);
  const handleOpenMobileNav = () => dispatch(openMobileNav(true));
  const handleCloseMobileNav = () => dispatch(closeMobileNav(false));
  const handleOpenBasket = () => dispatch(openBasket(true));
  const handleOpenSearchBar = () => dispatch(openSearchBar(true));
  const handleAccount = () =>
    alert(
      'Niebawem uruchomiona zostanie możliwość rejestracji użytkowników. Dziękujemy za cierpliwość!'
    );

  return (
    <Wrapper
      scrollPosition={scrollPosition}
      onMouseEnter={hoverOnMouseEnter}
      onMouseLeave={hoverOnMouseLeave}
      isHover={isHover}
      searchBarState={searchBarState}
      ref={ref}
    >
      <Hamburger onClick={handleOpenMobileNav} isHover={isHover} />
      <StyledSlideOut slideType="left" isVisible={mobileNavState}>
        <ListElements isVisible={mobileNavState}>
          <NavbarCloseButton onClick={handleCloseMobileNav}>
            X
          </NavbarCloseButton>
          {options.map((option, index) => (
            <NavigationElement
              as={NavLink}
              key={index}
              to={`/${option}`}
              $scrollPosition={scrollPosition}
              $isHover={isHover}
              $searchBarState={searchBarState}
            >
              {option}
            </NavigationElement>
          ))}
        </ListElements>
      </StyledSlideOut>
      <StyledLink to="/">
        <Logo
          textType="h1"
          $scrollPosition={scrollPosition}
          $isHover={isHover}
          searchBarState={searchBarState}
        >
          Papierniczeni
        </Logo>
      </StyledLink>
      <NavigationWrapper>
        <StyledIcon
          scrollPosition={scrollPosition}
          searchBarState={searchBarState}
          isHover={isHover}
          onClick={handleAccount}
          size="20"
          path={icons.account}
        />
        <Icon
          scrollPosition={scrollPosition}
          searchBarState={searchBarState}
          isHover={isHover}
          onClick={handleOpenSearchBar}
          size="20"
          path={icons.search}
        />
        <Icon
          scrollPosition={scrollPosition}
          searchBarState={searchBarState}
          isHover={isHover}
          onClick={handleOpenBasket}
          size="20"
          path={products.length ? icons.emptyBasket : icons.basket}
        />
      </NavigationWrapper>
    </Wrapper>
  );
});

export default Navigation;
