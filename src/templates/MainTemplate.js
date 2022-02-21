import React, { useRef, createContext } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Global } from '../theme/Global';
import Navigation from '../components/organisms/Navigation/Navigation';
import Basket from 'components/organisms/Basket/Basket';
import Footer from 'components/organisms/Footer/Footer';
import { Wrapper, InfoBox, StyledText } from './MainTemplate.styles';
import { useHeight } from 'hooks/useHeight';

export const NavigationHeightContext = createContext(0);

const MainTemplate = ({ children }) => {
  const ref = useRef(null);
  const { pathname } = useLocation();
  const { height } = useHeight(ref);

  return (
    <NavigationHeightContext.Provider value={height}>
      <Wrapper>
        <Global />
        {pathname.length === 1 && (
          <InfoBox>
            <StyledText>Darmowa wysyłka przy zakupach od 200 zł</StyledText>
          </InfoBox>
        )}
        <Basket />
        <Navigation ref={ref} />
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
