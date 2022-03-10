import React from 'react';
import PropTypes from 'prop-types';
import { StyledSlideOut } from './SlideOut.styles';

const SlideOut = ({ children, slideType, ...props }) => (
  <StyledSlideOut slideType={slideType} {...props}>
    {children}
  </StyledSlideOut>
);

SlideOut.propTypes = {
  children: PropTypes.node.isRequired,
  slideType: PropTypes.string,
};
export default SlideOut;
