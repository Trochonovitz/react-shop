import ProductsCategory from 'components/organisms/ProductsCategory/ProductsCategory';
import React, { useState } from 'react';
import MainTemplate from 'templates/MainTemplate';
import {
  CategoriesWrapper,
  Header,
  Title,
  Category,
} from './ProductsPage.styles';

const ProductsPage = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <MainTemplate>
      <Header>
        <Title textType="h2">Polecamy</Title>
        <CategoriesWrapper>
          <Category textType="h3">Kategorie</Category>
          <Category textType="h3">Sortuj</Category>
        </CategoriesWrapper>
      </Header>
      <ProductsCategory />
    </MainTemplate>
  );
};

export default ProductsPage;
