import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { openFilter, openSort } from 'store/navigation';
import { useQuery } from 'graphql-hooks';
import { useParams } from 'react-router-dom';
import { useContent } from 'hooks/useContent';
import { useSorting } from 'hooks/useSorting';
import { breakpoints } from 'theme/theme';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import FilterCategories from 'components/organisms/FilterCategories/FilterCategories';
import Products from 'components/organisms/Products/Products';
import FilterSort from 'components/organisms/FilterSort/FilterSort';
import {
  Wrapper,
  CategoriesWrapper,
  Header,
  Title,
  Category,
  Content,
} from './ShopPage.styles';

const ShopPage = () => {
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

  const handleProducts = () => {
    const filteredProducts = title
      ? products.filter((item) => item.category === title)
      : products;

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
      <Wrapper>
        <Header>
          <Title textType="h2">
            {title ? title.toUpperCase() : 'POLECAMY'}
          </Title>
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
          <Products products={handleProducts()} option={sortOption} />
          <FilterCategories />
          <FilterSort onClick={openFilterSort} setSortOption={setSortOption} />
        </Content>
      </Wrapper>
    </MainTemplate>
  );
};

export default ShopPage;
