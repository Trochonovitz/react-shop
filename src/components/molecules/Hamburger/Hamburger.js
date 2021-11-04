import React, { useContext } from 'react';
import { ScrollPositionContext } from 'pages/HomePage/HomePage';
import { StyledHamburger, StyledHamburgerInner } from './Hamburger.styles';

const Hamburger = ({ ...props }) => {
  const scrollPosition = useContext(ScrollPositionContext);

  return (
    <StyledHamburger {...props}>
      <StyledHamburgerInner scrollPosition={scrollPosition} />
    </StyledHamburger>
  );
};

export default Hamburger;
