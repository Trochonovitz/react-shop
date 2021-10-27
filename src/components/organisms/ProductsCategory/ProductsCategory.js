import React from 'react';
import { Wrapper } from './ProductsCategory.styles';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import { Button } from 'components/atoms/Buttton/Button';

const ProductsCategory = () => (
  <>
    <Wrapper>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Wrapper>
    <Button
      width={'70%'}
      backgroundColor={'#d4e4d4'}
      backgroundColorHover={'#fff'}
      fontColorMain={'#303030'}
      fontColorHover={'#bbccbb'}
      borderColor={'#bbccbb'}
    >
      Przejdź do sklepu
    </Button>
  </>
);

export default ProductsCategory;
