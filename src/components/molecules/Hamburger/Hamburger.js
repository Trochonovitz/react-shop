import React from 'react';
import PropTypes from 'prop-types';
import { StyledHamburger, StyledHamburgerInner } from './Hamburger.styles';

const Hamburger = ({ scrollPosition, ...props }) => (
  <StyledHamburger {...props}>
    <StyledHamburgerInner scrollPosition={scrollPosition} />
  </StyledHamburger>
);

Hamburger.propTypes = {
  scrollPosition: PropTypes.number.isRequired,
};

// Hamburger.defaultProps = {
//   scrollPosition: {},
// };

export default Hamburger;
