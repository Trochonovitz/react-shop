import React from 'react';
import PropTypes, { object } from 'prop-types';
import { useLocation } from 'react-router-dom';
import { animated, useTransition } from '@react-spring/web';
import Button from 'components/atoms/Button/Button';
import ProductCard from 'components/molecules/ProductCard/ProductCard';
import { Wrapper, StyledLink } from './Products.styles';

const Products = ({ products, option = '' }) => {
  const { pathname } = useLocation();
  const AnimatedProductCard = animated(ProductCard);
  const transition = useTransition(option, {
    from: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1 },
  });

  return (
    <Wrapper>
      {products.map(
        ({
          id,
          name,
          price,
          productVisualisation: {
            responsiveImage: { srcSet },
          },
        }) =>
          transition((style) => (
            <AnimatedProductCard
              style={style}
              name={name}
              price={price}
              img={srcSet}
              id={id}
              key={id}
            />
          ))
      )}
      {pathname !== '/sklep' && (
        <StyledLink to="/sklep">
          <Button buttonType="green">Przejdź do sklepu</Button>
        </StyledLink>
      )}
    </Wrapper>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(object).isRequired,
  option: PropTypes.string,
};

export default Products;
