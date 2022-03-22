import React from 'react';
import PropTypes from 'prop-types';
import { StyledSVG } from './Icon.styles';

const Icon = ({ size, path, isHover, scrollPosition, ...props }) => (
  <StyledSVG
    $isHover={isHover}
    $scrollPosition={scrollPosition}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path d={path} />
  </StyledSVG>
);

Icon.propTypes = {
  size: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  isHover: PropTypes.bool,
  scrollPosition: PropTypes.number,
};

export default Icon;
