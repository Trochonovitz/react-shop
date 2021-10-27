import React, { useState, useRef, createContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { InfoBox, Wrapper, Header, Info, InfoLink } from './HomePage.styles';
import MainTemplate from '../../templates/MainTemplate';
import ProductsCategory from '../../components/organisms/ProductsCategory/ProductsCategory';
import ItemsCarousel from '../../components/organisms/Carousel/Carousel';
import Slide from 'components/molecules/Slide/Slide';
import { slides } from 'fixtures';
import BlogSection from 'components/organisms/BlogSection/BlogSection';

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
      <Slide
        height={'100vh'}
        ref={ref}
        cover={slides[0].link}
        title={slides[0].title}
        animated
      >
        <MainTemplate scrollPosition={elementPosition} />
      </Slide>
      <Header>Polecamy</Header>
      <ProductsCategory />
      <p style={{ textDecoration: 'underline' }}>karauzela z itemami</p>
      <Info>
        Zobacz ostatnio dodane produkty i odkryj świeże papiernicze inspiracje.
        <br />
        <br />
        <InfoLink to="#">więcej</InfoLink>
      </Info>
      <ItemsCarousel />
      <p style={{ textDecoration: 'underline' }}>komponent z inspiracjami</p>
      <p>kreska, która będzie border bottom komponentu z inspiracjami</p>
      <BlogSection />
    </Wrapper>
  );
};

HomePage.propTypes = {
  state: PropTypes.objectOf().isRequired,
};

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(HomePage);
