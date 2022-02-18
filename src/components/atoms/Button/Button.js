import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

const Button = ({ children, buttonType, ...props }) => (
  <StyledButton buttonType={buttonType} {...props}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.string.isRequired,
};

export default Button;
