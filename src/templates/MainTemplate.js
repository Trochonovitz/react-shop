import React, { useState } from 'react';
import { Global } from '../theme/Global';
import { Wrapper } from './MainTemplate.styles';
import Navigation from '../components/organisms/Navigation/Navigation';
import Basket from 'components/organisms/Basket/Basket';
import Footer from 'components/organisms/Footer/Footer';

const MainTemplate = ({ children }) => {
  const [isVisible, setVisibility] = useState({
    mobileNav: false,
    basket: false,
  });

  return (
    <Wrapper>
      <Global />
      <Basket isVisible={isVisible.basket} setVisibility={setVisibility} />
      <Navigation
        isVisible={isVisible.mobileNav}
        setVisibility={setVisibility}
      />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default MainTemplate;
