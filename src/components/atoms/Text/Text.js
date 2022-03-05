import React from 'react';
import PropTypes from 'prop-types';

import { StyledText, types } from './Text.styles';

const Text = ({ children, textType, ...props }) => (
  <StyledText $textType={textType} as={types[textType]} {...props}>
    {children}
  </StyledText>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
  textType: PropTypes.string,
};
export default Text;
