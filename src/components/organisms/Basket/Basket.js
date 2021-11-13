import React from 'react';
import { useSelector } from 'react-redux';
import {
  StyledSlideOutRight,
  Wrapper,
  StyledTitle,
  BasketCloseButton,
  StyledParagraph,
  StickyWrapper,
} from './Basket.styles';

const Basket = ({ isVisible, setVisibility }) => {
  const products = useSelector((store) => store?.basket);
  const basketValue = products.reduce(
    (previous, current) => previous + +current.price,
    0
  );

  return (
    <StickyWrapper>
      <StyledSlideOutRight isVisible={isVisible} from={'right'}>
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
            <div key={`${product}${index}`}>
              <li>{product.name}</li> <li>{product.price}</li>
            </div>
          ))
        ) : (
          <StyledTitle>Twój koszyk jest pusty</StyledTitle>
        )}
      </StyledSlideOutRight>
    </StickyWrapper>
  );
};

export default Basket;
