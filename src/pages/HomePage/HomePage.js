import React, { useState, useRef, createContext } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { slides } from 'fixtures';
import MainTemplate from '../../templates/MainTemplate';
import ProductsCategory from '../../components/organisms/ProductsCategory/ProductsCategory';
import ItemsCarousel from '../../components/organisms/Carousel/Carousel';
import Slide from 'components/molecules/Slide/Slide';
import BlogSection from 'components/organisms/BlogSection/BlogSection';
import AboutUs from 'components/organisms/AboutUs/AboutUs';
import { StyledTitle, Info, InfoLink, NewItemsBox } from './HomePage.styles';

export const ScrollPositionContext = createContext(0);

const HomePage = () => {
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
      <MainTemplate>
        <Slide
          cover={slides[0].link}
          title={slides[0].title}
          ref={ref}
          animated
          main
        />
        <StyledTitle color="#595959">Polecamy</StyledTitle>
        <ProductsCategory />
        <NewItemsBox>
          <Info>
            Zobacz ostatnio dodane produkty i odkryj świeże papiernicze
            inspiracje.
            <br />
            <br />
            <InfoLink to="/sklep">więcej</InfoLink>
          </Info>
          <ItemsCarousel />
        </NewItemsBox>
        <BlogSection />
        <AboutUs />
      </MainTemplate>
    </ScrollPositionContext.Provider>
  );
};

export default HomePage;
