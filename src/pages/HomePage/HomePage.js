import React, { useState, useRef, createContext } from 'react';
import { useQuery } from 'graphql-hooks';
import { useContent } from 'hooks/useContent';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { slides } from 'fixtures';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import ProductsCategory from 'components/organisms/ProductsCategory/ProductsCategory';
import ProductCard from 'components/molecules/ProductCard/ProductCard';
import Carousel from 'components/organisms/Carousel/Carousel';
import Slide from 'components/molecules/Slide/Slide';
import BlogSection from 'components/organisms/BlogSection/BlogSection';
import AboutUs from 'components/organisms/AboutUs/AboutUs';
import { Title, Info, InfoLink, NewItemsBox } from './HomePage.styles';

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

  const { productsQuery } = useContent();
  const { loading, error, data } = useQuery(productsQuery);
  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';
  const products = data.allProducts;

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
        <ProductsCategory>
          {products.map(
            ({ id, name, price, productVisualisation: { url } }) => (
              <ProductCard
                name={name}
                price={price}
                img={url}
                id={id}
                key={id}
              />
            )
          )}
        </ProductsCategory>
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
        {/* BlogSection zamienić (jak w Products Category) na renderowanie chilld */}
        <BlogSection />
        <AboutUs />
      </MainTemplate>
    </ScrollPositionContext.Provider>
  );
};

export default HomePage;
