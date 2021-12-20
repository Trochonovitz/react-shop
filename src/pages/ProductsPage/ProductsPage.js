import ProductsCategory from 'components/organisms/ProductsCategory/ProductsCategory';
import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import {
  CategoriesWrapper,
  Header,
  StyledTitle,
  StyledSecondTitle,
} from './ProductsPage.styles';

const ProductsPage = () => (
  <MainTemplate>
    <Header>
      <StyledTitle color="#595959">Polecamy</StyledTitle>
      <CategoriesWrapper>
        <StyledSecondTitle>Kategorie</StyledSecondTitle>
        <StyledSecondTitle>Sortuj</StyledSecondTitle>
      </CategoriesWrapper>
    </Header>
    <ProductsCategory />
  </MainTemplate>
);

export default ProductsPage;
