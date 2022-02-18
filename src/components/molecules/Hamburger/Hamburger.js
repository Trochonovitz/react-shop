import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ScrollPositionContext } from 'pages/HomePage/HomePage';
import { StyledHamburger, StyledHamburgerInner } from './Hamburger.styles';

const Hamburger = ({ ishover, ...props }) => {
  const scrollPosition = useContext(ScrollPositionContext);

  return (
    <StyledHamburger {...props}>
      <StyledHamburgerInner scrollposition={scrollPosition} ishover={ishover} />
    </StyledHamburger>
  );
};

Hamburger.propTypes = {
  ishover: PropTypes.bool.isRequired,
};

export default Hamburger;
