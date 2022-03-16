import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { openFilter, openSort } from 'store/navigation';
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
  const [sortOption, setSortOption] = useState('');
  const { id: title } = useParams();
  const dispatch = useDispatch();
  const sortState = useSelector((store) => store.nav.sort);
  const sortOptions = {
    alphabetical: 'A-Z',
    reverse: 'Z-A',
    byPrice: 'Od najtańszej',
  };
  const desktopView = useMediaQuery({ query: breakpoints.desktop });
  const AnimatedProductCard = animated(ProductCard);
  const transition = useTransition(sortOption, {
    from: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1 },
  });
  const { sortAlphabetical, sortAlphabeticalReverse, sortByPrice } =
    useSorting();
  const openFilterCategories = () => dispatch(openFilter(true));
  const openFilterSort = () =>
    dispatch(openSort(desktopView ? !sortState : true));

  const { productsQuery } = useContent();
  const { loading, error, data } = useQuery(productsQuery);
  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';

  const products = data.allProducts;
  const filteredProducts = title
    ? products.filter((item) => item.category === title)
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
        <Title textType="h2">{title ? title.toUpperCase() : 'POLECAMY'}</Title>
        <CategoriesWrapper>
          <Category textType="h3" onClick={openFilterCategories}>
            Kategorie
          </Category>
          <Category textType="h3" onClick={openFilterSort}>
            Sortuj
          </Category>
        </CategoriesWrapper>
      </Header>
      <Content>
        <ProductsCategory>
          {productsFn().map(
            ({
              id,
              name,
              price,
              productVisualisation: {
                responsiveImage: { srcSet },
              },
            }) =>
              transition((style) => (
                <AnimatedProductCard
                  style={style}
                  name={name}
                  price={price}
                  img={srcSet}
                  key={id}
                  id={id}
                />
              ))
          )}
        </ProductsCategory>
        <FilterCategories />
        <FilterSort onClick={openFilterSort} setSortOption={setSortOption} />
      </Content>
    </MainTemplate>
  );
};

export default ProductsPageTemplate;
