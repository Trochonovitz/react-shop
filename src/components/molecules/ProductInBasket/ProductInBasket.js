import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeItem } from 'store/store';

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

const ProductInBasket = ({ name, price, img }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Image src={img} alt={`${name} visualistation`} />
      <InsideWrapper>
        <ProductInfo>
          <Paragraph>{name}</Paragraph>
          <Paragraph>{price} zł</Paragraph>
        </ProductInfo>
        <Control>
          <Input />
          <StyledButtonWithUnderline
            onClick={() => dispatch(removeItem({ name }))}
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
