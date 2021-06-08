import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Global from '../theme/Global';
import Navigation from '../components/organisms/Navigation/Navigation';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MainTemplate = ({ children }) => (
  <StyledWrapper>
    <Global />
    <Navigation />
    {children}
  </StyledWrapper>
);

MainTemplate.propTypes = {
  children: PropTypes.objectOf().isRequired,
};

export default MainTemplate;
