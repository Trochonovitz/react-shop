import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { animated, useTransition } from '@react-spring/web';
import { useQuery } from 'graphql-hooks';
import { useParams } from 'react-router-dom';
import { useContent } from 'hooks/useContent';
import { useSorting } from 'hooks/useSorting';
import { breakpoints } from 'theme/theme';
import ProductCard from 'components/molecules/ProductCard/ProductCard';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import FilterCategories from 'components/organisms/FilterCategories/FilterCategories';
import ProductsCategory from 'components/organisms/ProductsCategory/ProductsCategory';
import FilterSort from 'components/organisms/FilterSort/FilterSort';
import {
  CategoriesWrapper,
  Header,
  Title,
  Category,
  Content,
} from './ProductsPageTemplate.styles';

const ProductsPageTemplate = () => {
  const [visibility, setVisibility] = useState({ filter: false, sort: false });
  const [sortOption, setSortOption] = useState('');
  const sortOptions = {
    alphabetical: 'A-Z',
    reverse: 'Z-A',
    byPrice: 'Od najtańszej',
  };
  const desktopView = useMediaQuery({ query: breakpoints.desktop });
  const { id } = useParams();
  const { sortAlphabetical, sortAlphabeticalReverse, sortByPrice } =
    useSorting();
  const handleOpenFilterCategories = () => setVisibility({ filter: true });
  const handleOpenFilterSort = () =>
    setVisibility(desktopView ? { sort: !visibility.sort } : { sort: true });

  const transition = useTransition(sortOption, {
    from: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1 },
  });
  const AnimatedProductCard = animated(ProductCard);

  const { productsQuery } = useContent();
  const { loading, error, data } = useQuery(productsQuery);
  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';

  const products = data.allProducts;
  const filteredProducts = id
    ? products.filter((item) => item.category === id)
    : products;

  const productsFn = () => {
    switch (sortOption) {
      case sortOptions.alphabetical:
        return sortAlphabetical(filteredProducts);
      case sortOptions.reverse:
        return sortAlphabeticalReverse(filteredProducts);
      case sortOptions.byPrice:
        return sortByPrice(filteredProducts);
      default:
        return filteredProducts;
    }
  };

  return (
    <MainTemplate>
      <Header>
        <Title textType="h2">{id ? id.toUpperCase() : 'POLECAMY'}</Title>
        <CategoriesWrapper>
          {!desktopView && (
            <Category textType="h3" onClick={handleOpenFilterCategories}>
              Kategorie
            </Category>
          )}
          <Category textType="h3" onClick={handleOpenFilterSort}>
            Sortuj
          </Category>
        </CategoriesWrapper>
      </Header>
      <Content>
        <ProductsCategory>
          {productsFn().map(
            ({ id, name, price, productVisualisation: { url } }) =>
              transition((style) => (
                <AnimatedProductCard
                  style={style}
                  name={name}
                  price={price}
                  img={url}
                  key={id}
                  id={id}
                />
              ))
          )}
        </ProductsCategory>
        <FilterCategories
          isVisible={visibility.filter}
          setVisibility={setVisibility}
        />
        <FilterSort
          onClick={desktopView ? handleOpenFilterSort : null}
          isVisible={visibility.sort}
          setVisibility={setVisibility}
          setSortOption={setSortOption}
        />
      </Content>
    </MainTemplate>
  );
};

export default ProductsPageTemplate;
