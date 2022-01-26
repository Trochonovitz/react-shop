import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ children, buttonType, ...props }) => (
  <StyledButton buttonType={buttonType} {...props}>
    {children}
  </StyledButton>
);

export default Button;
