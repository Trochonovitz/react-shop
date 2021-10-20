import React, { useState, useRef, createContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import {
  MainInfo,
  InfoBox,
  Main,
  Wrapper,
  StyledTitle,
  Header,
  StyledButton,
} from './HomePage.styles';
import MainTemplate from '../../templates/MainTemplate';
import ProductsCategory from '../../components/organisms/ProductsCategory/ProductsCategory';

export const ScrollInfoContext = createContext({ y: {} });

const HomePage = ({ state }) => {
  const [elementPosition, setElementPosition] = useState({});
  const ref = useRef();

  useScrollPosition(
    ({ currPos }) => {
      setElementPosition(currPos.y);
    },
    [],
    ref
  );

  return (
    <Wrapper>
      <InfoBox>Darmowa wysyłka przy zakupach od 200 zł</InfoBox>
      <Main ref={ref}>
        <MainTemplate scrollPosition={elementPosition} />
        <MainInfo>
          <StyledTitle>Kalendarze 2022</StyledTitle>
          <StyledButton animated>Zobacz</StyledButton>
        </MainInfo>
      </Main>
      <Header>Polecamy</Header>
      <ProductsCategory />
    </Wrapper>
  );
};

HomePage.propTypes = {
  state: PropTypes.objectOf().isRequired,
};

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(HomePage);
