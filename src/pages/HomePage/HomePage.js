import React, { useState, useRef, createContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import MainTemplate from '../../templates/MainTemplate';
import ProductsCategory from '../../components/organisms/ProductsCategory/ProductsCategory';
import ItemsCarousel from '../../components/organisms/Carousel/Carousel';
import Slide from 'components/molecules/Slide/Slide';
import { slides } from 'fixtures';
import BlogSection from 'components/organisms/BlogSection/BlogSection';
import AboutUs from 'components/organisms/AboutUs/AboutUs';
import {
  InfoBox,
  Header,
  Info,
  InfoLink,
  NewItemsBox,
  StyledP,
} from './HomePage.styles';
import Footer from 'components/organisms/Footer/Footer';

export const ScrollPositionContext = createContext(0);

const HomePage = ({ state }) => {
  const [elementPosition, setElementPosition] = useState();
  const ref = useRef();

  useScrollPosition(
    ({ currPos }) => {
      setElementPosition(currPos.y);
    },
    [],
    ref
  );

  return (
    <ScrollPositionContext.Provider value={elementPosition}>
      <InfoBox>Darmowa wysyłka przy zakupach od 200 zł</InfoBox>
      <MainTemplate>
        <Slide
          cover={slides[0].link}
          height={'752px'}
          ref={ref}
          title={slides[0].title}
          animated
          main
        />
        <Header>Polecamy</Header>
        <ProductsCategory />
        <NewItemsBox>
          <StyledP style={{ textDecoration: 'underline' }}>
            karauzela z itemami
          </StyledP>
          <Info>
            Zobacz ostatnio dodane produkty i odkryj świeże papiernicze
            inspiracje.
            <br />
            <br />
            <InfoLink to="#">więcej</InfoLink>
          </Info>
        </NewItemsBox>
        <ItemsCarousel />
        <p style={{ textDecoration: 'underline' }}>komponent z inspiracjami</p>
        <p>kreska, która będzie border bottom komponentu z inspiracjami</p>
        <BlogSection />
        <AboutUs />
        <Footer />
      </MainTemplate>
    </ScrollPositionContext.Provider>
  );
};

HomePage.propTypes = {
  state: PropTypes.array,
};

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(HomePage);
