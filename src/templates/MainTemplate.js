import React from 'react';
import { Global } from '../theme/Global';
import Navigation from '../components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';

const MainTemplate = ({ children }) => (
  <Wrapper>
    <Global />
    <Navigation />
    {children}
  </Wrapper>
);

export default MainTemplate;
