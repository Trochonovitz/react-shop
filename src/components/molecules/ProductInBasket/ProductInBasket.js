import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { incrementBasketValue, removeItem } from 'store/basket';

import {
  Wrapper,
  Image,
  InsideWrapper,
  Paragraph,
  Input,
  Control,
  ProductInfo,
  StyledButtonWithUnderline,
} from './ProductInBasket.styles';

const ProductInBasket = ({ name, price, img, id, quantity }) => {
  const dispatch = useDispatch();

  const handleIncrementProductValue = (event) => {
    const incrementValue = +event.target.value;
    dispatch(incrementBasketValue({ incrementValue, id, price }));
  };

  return (
    <Wrapper>
      <Image src={img} alt={`${name} visualistation`} />
      <InsideWrapper>
        <ProductInfo>
          <Paragraph>{name}</Paragraph>
          <Paragraph>{price} zł</Paragraph>
        </ProductInfo>
        <Control>
          <Input onChange={(event) => handleIncrementProductValue(event)} />
          <StyledButtonWithUnderline
            onClick={() => dispatch(removeItem({ id, price, quantity }))}
          >
            USUŃ
          </StyledButtonWithUnderline>
        </Control>
      </InsideWrapper>
    </Wrapper>
  );
};

ProductInBasket.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

export default ProductInBasket;
