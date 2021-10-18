import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '../theme/Global';
import Navigation from '../components/organisms/Navigation/Navigation';

const MainTemplate = ({ children }) => (
  <>
    <Global />
    <Navigation />
    {children}
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.objectOf().isRequired,
};

export default MainTemplate;
