import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '../theme/Global';
import Navigation from '../components/organisms/Navigation/Navigation';

const MainTemplate = ({ scrollPosition }) => (
  <>
    <Global />
    <Navigation scrollPosition={scrollPosition} />
  </>
);

MainTemplate.propTypes = {
  scrollPosition: PropTypes.number.isRequired,
};

export default MainTemplate;
