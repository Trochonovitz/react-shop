import React from 'react';
import { useDispatch } from 'react-redux';
import { Wrapper, Header2, Image } from './ProductCard.styles';
import { addItem } from 'store/store';

const ProductCard = ({ name, price }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper onClick={() => dispatch(addItem({ name, price }))}>
      <Image
        alt={`${name}`}
        src="https://cdn.shopify.com/s/files/1/0594/6743/2116/products/17110-uma-notes-niebieski-01_1200x.jpg?v=1632316508"
      />

      <Header2>{name}</Header2>
      <Header2>{price} zł</Header2>
      {/* <StyledButton onClick={() => addItemToBasket(productName, productPrice)}>
      Add to basket
    </StyledButton> */}
    </Wrapper>
  );
};

export default ProductCard;
