import React, { useRef, createContext } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useHeight } from 'hooks/useHeight';
import { Global } from 'theme/Global';
import Navigation from 'components/organisms/Navigation/Navigation';
import Basket from 'components/organisms/Basket/Basket';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import Footer from 'components/organisms/Footer/Footer';
import { Wrapper, InfoBox, StyledText } from './MainTemplate.styles';

export const NavigationHeightContext = createContext({
  heightNav: 0,
  heightInfoBox: 0,
});

const MainTemplate = ({ children }) => {
  const refNav = useRef(0);
  const refInfoBox = useRef(0);
  const { pathname } = useLocation();
  const { height } = useHeight(refNav, refInfoBox);

  return (
    <NavigationHeightContext.Provider value={height}>
      <Wrapper>
        <Global />
        {pathname.length === 1 && (
          <InfoBox ref={refInfoBox}>
            <StyledText>Darmowa wysyłka przy zakupach od 200 zł</StyledText>
          </InfoBox>
        )}
        <Basket />
        <SearchBar />
        <Navigation ref={refNav} />
        {children}
        <Footer />
      </Wrapper>
    </NavigationHeightContext.Provider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
