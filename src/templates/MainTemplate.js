import React from 'react';
import { useLocation } from 'react-router-dom';
import { Global } from '../theme/Global';
import Navigation from '../components/organisms/Navigation/Navigation';
import Basket from 'components/organisms/Basket/Basket';
import Footer from 'components/organisms/Footer/Footer';
import { Wrapper, InfoBox } from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <Global />
      <Basket />
      {pathname.length === 1 && (
        <InfoBox>Darmowa wysyłka przy zakupach od 200 zł</InfoBox>
      )}
      <Navigation />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default MainTemplate;
