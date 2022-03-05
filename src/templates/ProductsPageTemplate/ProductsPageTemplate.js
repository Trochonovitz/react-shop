import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
// import { animated, useTransition } from '@react-spring/web';
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
  const { id: title } = useParams();
  const desktopView = useMediaQuery({ query: breakpoints.desktop });
  const { sortAlphabetical, sortAlphabeticalReverse, sortByPrice } =
    useSorting();
  const sortOptions = {
    alphabetical: 'A-Z',
    reverse: 'Z-A',
    byPrice: 'Od najtańszej',
  };
  const handleOpenFilterSort = () =>
    setVisibility(desktopView ? { sort: !visibility.sort } : { sort: true });

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
          {!desktopView && (
            <Category
              textType="h3"
              onClick={() => setVisibility({ filter: true })}
            >
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
        <FilterCategories
          isVisible={visibility.filter}
          setVisibility={setVisibility}
        />
        {/* {transition(
          (style, item) =>
            item && (
              <AnimatedFilterSort
                style={style}
                onClick={desktopView ? handleOpenFilterSort : null}
                isVisible={desktopView ? visibility.sort : null}
                setVisibility={setVisibility}
                setSortOption={setSortOption}
              />
            )
        )} */}
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
