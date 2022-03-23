import React, { useState, useEffect, useRef, createContext } from 'react';
import axios from 'axios';
import { useContent } from 'hooks/useContent';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { slides } from 'fixtures';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Products from 'components/organisms/Products/Products';
import Carousel from 'components/organisms/Carousel/Carousel';
import Slide from 'components/molecules/Slide/Slide';
import BlogSection from 'components/organisms/BlogSection/BlogSection';
import AboutUs from 'components/organisms/AboutUs/AboutUs';
import { Title, Info, InfoLink, NewItemsBox } from './HomePage.styles';

export const ScrollPositionContext = createContext(0);

const HomePage = () => {
  const [elementPosition, setElementPosition] = useState();
  const [products, setProducts] = useState([]);
  const { getProducts } = useContent();
  const ref = useRef();

  useScrollPosition(
    ({ currPos }) => {
      setElementPosition(currPos.y);
    },
    [],
    ref
  );

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    (async () => {
      const fetchedProducts = await getProducts(signal);
      setProducts(fetchedProducts);
    })();

    return () => controller.abort();
  }, [getProducts]);

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
        <Title textType="h2">Polecamy</Title>
        <Products products={products} />
        <NewItemsBox>
          <Info>
            Zobacz ostatnio dodane produkty i odkryj świeże papiernicze
            inspiracje.
            <br />
            <br />
            <InfoLink to="/sklep">więcej</InfoLink>
          </Info>
          <Carousel />
        </NewItemsBox>
        <BlogSection />
        <AboutUs />
      </MainTemplate>
    </ScrollPositionContext.Provider>
  );
};

export default HomePage;
