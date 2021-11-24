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
  const basketValue = products.reduce(
    (previous, current) => previous + +current.price,
    0
  );

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
                products.length > 0 ? 200 - basketValue : 200
              } zł i uzyskaj darmową przesyłkę`
            : `Zamówienie kwalifikuje się do darmowej przesyłki`}
        </StyledParagraph>
        {products.length > 0 ? (
          products.map((product, index) => (
            <ItemsList key={`${product}${index}`}>
              <ProductInBasket
                name={product.name}
                price={product.price}
                img={product.img}
              />
            </ItemsList>
          ))
        ) : (
          <StyledTitle>Twój koszyk jest pusty</StyledTitle>
        )}
      </StyledSlideOut>
    </StickyWrapper>
  );
};

export default Basket;
