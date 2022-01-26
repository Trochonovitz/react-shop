import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'graphql-hooks';
import { useContent } from 'hooks/useContent';
import Button from 'components/atoms/Button/Button';
import ProductCard from 'components/molecules/ProductCard/ProductCard';
import { Wrapper, StyledLink } from './ProductsCategory.styles';

const ProductsCategory = () => {
  const { productsQuery } = useContent();
  const { loading, error, data } = useQuery(productsQuery);
  const { pathname } = useLocation();

  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';

  return (
    <>
      <Wrapper>
        {data.allProducts.length > 0
          ? data.allProducts.map(
              ({ id, name, price, productVisualisation: { url } }) => (
                <ProductCard
                  name={name}
                  price={price}
                  img={url}
                  id={id}
                  key={`${name}${id}`}
                />
              )
            )
          : `Coś poszło nie tak. Ponownie przeładuj stronę!`}
      </Wrapper>
      {pathname.length === 1 && (
        <StyledLink to="/products">
          <Button buttonType="green">Przejdź do sklepu</Button>
        </StyledLink>
      )}
    </>
  );
};

export default ProductsCategory;
