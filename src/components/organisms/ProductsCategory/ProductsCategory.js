import React from 'react';
import { Wrapper, StyledButton } from './ProductsCategory.styles';
import ProductCard from '../../molecules/ProductCard/ProductCard';

const ProductsCategory = () => (
  <>
    <Wrapper>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Wrapper>
    <StyledButton secondary>Przejdź do sklepu</StyledButton>
  </>
);

export default ProductsCategory;
