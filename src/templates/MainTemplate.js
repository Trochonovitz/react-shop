import React, { useState } from 'react';
import { Global } from '../theme/Global';
import Navigation from '../components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';
import Basket from 'components/organisms/Basket/Basket';

const MainTemplate = ({ children }) => {
  const [isVisible, setVisibility] = useState({
    mobileNav: false,
    basket: false,
  });

  return (
    <Wrapper>
      <Global />
      <Navigation
        isVisible={isVisible.mobileNav}
        setVisibility={setVisibility}
      />
      <Basket isVisible={isVisible.basket} setVisibility={setVisibility} />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
