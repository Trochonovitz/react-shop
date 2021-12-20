import React, { useState, useRef, createContext } from 'react';
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
  StyledTitle,
  Info,
  InfoLink,
  NewItemsBox,
  StyledP,
} from './HomePage.styles';

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
        <StyledTitle color="#595959">Polecamy</StyledTitle>
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
        <BlogSection />
        <AboutUs />
      </MainTemplate>
    </ScrollPositionContext.Provider>
  );
};

export default HomePage;
