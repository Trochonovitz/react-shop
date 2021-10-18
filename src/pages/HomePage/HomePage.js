import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InfoBox, Main, Wrapper } from './HomePage.styles';
import MainTemplate from '../../templates/MainTemplate';

const HomePage = ({ state }) => (
  <Wrapper>
    <InfoBox>Darmowa wysyłka przy zakupach od 200 zł</InfoBox>
    <MainTemplate />
    <Main>
      <h1>Kalendarze 2022</h1>
      <button type="button">Zobacz</button>
    </Main>
    <p>1</p>
    <p>1</p>
  </Wrapper>
);

HomePage.propTypes = {
  state: PropTypes.objectOf().isRequired,
};

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(HomePage);
