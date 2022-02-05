import React from 'react';
import { useLocation } from 'react-router-dom';
import { Global } from '../theme/Global';
import Navigation from '../components/organisms/Navigation/Navigation';
import Basket from 'components/organisms/Basket/Basket';
import Footer from 'components/organisms/Footer/Footer';
import { Wrapper, InfoBox, StyledText } from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <Global />
      {pathname.length === 1 && (
        <InfoBox>
          <StyledText>Darmowa wysyłka przy zakupach od 200 zł</StyledText>
        </InfoBox>
      )}
      <Navigation />
      <Basket />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default MainTemplate;
