import FilterCategories from 'components/organisms/FilterCategories/FilterCategories';
import ProductsCategory from 'components/organisms/ProductsCategory/ProductsCategory';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from 'theme/theme';
import MainTemplate from 'templates/MainTemplate';
import {
  CategoriesWrapper,
  Header,
  Title,
  Category,
  Content,
} from './ProductsPage.styles';

const ProductsPage = () => {
  const [visibility, setVisibility] = useState({ filter: false, sort: false });
  const handleOpenFilterCategories = () => setVisibility({ filter: true });
  const desktopView = useMediaQuery({ query: breakpoints.desktop });

  return (
    <MainTemplate>
      <Header>
        <Title textType="h2">Polecamy</Title>
        <CategoriesWrapper>
          {!desktopView && (
            <Category textType="h3" onClick={handleOpenFilterCategories}>
              Kategorie
            </Category>
          )}
          <Category textType="h3">Sortuj</Category>
        </CategoriesWrapper>
      </Header>
      <Content>
        <ProductsCategory />
        <FilterCategories
          isVisible={visibility.filter}
          setVisibility={setVisibility}
        />
      </Content>
    </MainTemplate>
  );
};

export default ProductsPage;
