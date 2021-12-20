import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useQuery } from 'graphql-hooks';
import { useContent } from 'hooks/useContent';
import { StyledButton, Wrapper } from './ProductsCategory.styles';
import ProductCard from 'components/molecules/ProductCard/ProductCard';

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
        <StyledButton
          backgroundColor={'#d4e4d4'}
          backgroundColorHover={'#fff'}
          fontColorMain={'#303030'}
          fontColorHover={'#bbccbb'}
          borderColor={'#bbccbb'}
          as={Link}
          to="/products"
        >
          Przejdź do sklepu
        </StyledButton>
      )}
    </>
  );
};

export default ProductsCategory;
