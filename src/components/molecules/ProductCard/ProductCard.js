import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from 'store/store';
import { Wrapper, Paragraph, Image, BuyButton } from './ProductCard.styles';

const ProductCard = ({ name, price, img }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper onClick={() => dispatch(addItem({ name, price, img }))}>
      <Image alt={`${name}`} src={img} />

      <Paragraph>{name}</Paragraph>
      <Paragraph>{price} zł</Paragraph>
      {/* <BuyButton onClick={() => dispatch(addItem({name, price})}>
      ikona
    </BuyButton> */}
    </Wrapper>
  );
};

export default ProductCard;
