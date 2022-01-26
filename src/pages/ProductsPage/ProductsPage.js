import ProductsCategory from 'components/organisms/ProductsCategory/ProductsCategory';
import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import {
  CategoriesWrapper,
  Header,
  Title,
  StyledSecondTitle,
} from './ProductsPage.styles';

const ProductsPage = () => (
  <MainTemplate>
    <Header>
      <Title textType="h2">Polecamy</Title>
      <CategoriesWrapper>
        <StyledSecondTitle>Kategorie</StyledSecondTitle>
        <StyledSecondTitle>Sortuj</StyledSecondTitle>
      </CategoriesWrapper>
    </Header>
    <ProductsCategory />
  </MainTemplate>
);

export default ProductsPage;
