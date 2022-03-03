import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import { Wrapper, StyledLink } from './ProductsCategory.styles';

const ProductsCategory = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      <Wrapper>{children}</Wrapper>
      {pathname.length === 1 && (
        <StyledLink to="/sklep">
          <Button buttonType="green">Przejdź do sklepu</Button>
        </StyledLink>
      )}
    </>
  );
};

export default ProductsCategory;
