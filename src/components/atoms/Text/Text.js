import React from 'react';
import { StyledText, types } from './Text.styles';

const Text = ({ children, textType, ...props }) => (
  <StyledText textType={textType} as={types[textType]} {...props}>
    {children}
  </StyledText>
);

export default Text;
