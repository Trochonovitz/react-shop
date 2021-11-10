import React from 'react';
import { StyledButton, Wrapper } from './ProductsCategory.styles';
import ProductCard from '../../molecules/ProductCard/ProductCard';

const ProductsCategory = () => (
  <>
    <Wrapper>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Wrapper>
    <StyledButton
      backgroundColor={'#d4e4d4'}
      backgroundColorHover={'#fff'}
      fontColorMain={'#303030'}
      fontColorHover={'#bbccbb'}
      borderColor={'#bbccbb'}
    >
      Przejdź do sklepu
    </StyledButton>
  </>
);

export default ProductsCategory;
