import React from 'react';
import { StyledHamburger, StyledHamburgerInner } from './Hamburger.styles';

const Hamburger = ({ ...props }) => (
  <StyledHamburger {...props}>
    <StyledHamburgerInner />
  </StyledHamburger>
);

export default Hamburger;
