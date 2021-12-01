import React from 'react';
import { useSelector } from 'react-redux';
import ProductInBasket from 'components/molecules/ProductInBasket/ProductInBasket';
import {
  StyledSlideOut,
  Wrapper,
  StyledTitle,
  BasketCloseButton,
  StyledParagraph,
  StickyWrapper,
  ItemsList,
} from './Basket.styles';

const Basket = ({ isVisible, setVisibility }) => {
  const products = useSelector((store) => store?.basket);
  const basketValue = useSelector((store) => store?.basketValue);

  return (
    <StickyWrapper>
      <StyledSlideOut isVisible={isVisible} from={'right'}>
        <Wrapper>
          <BasketCloseButton onClick={() => setVisibility({ basket: false })}>
            X
          </BasketCloseButton>
          <StyledTitle color={'#595959'}>Koszyk</StyledTitle>
        </Wrapper>
        <StyledParagraph>
          {basketValue <= 200
            ? `Dodaj do koszyka produkty za ${
                200 - basketValue
              } zł i uzyskaj darmową przesyłkę`
            : `Zamówienie kwalifikuje się do darmowej przesyłki`}
        </StyledParagraph>
        <ItemsList>
          {products.length > 0 ? (
            products.map((product, index) => (
              <ProductInBasket
                name={product.name}
                price={product.price}
                img={product.img}
                id={product.id}
                key={`${product}${index}`}
              />
            ))
          ) : (
            <StyledTitle>Twój koszyk jest pusty</StyledTitle>
          )}
        </ItemsList>
      </StyledSlideOut>
    </StickyWrapper>
  );
};

export default Basket;
