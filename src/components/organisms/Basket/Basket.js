import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeBasket } from 'store/navigation';
import ProductInBasket from 'components/molecules/ProductInBasket/ProductInBasket';
import {
  StyledSlideOut,
  Header,
  Wrapper,
  StyledTitle,
  BasketCloseButton,
  Paragraph,
  StickyWrapper,
  ItemsList,
  Checkout,
  StyledButton,
} from './Basket.styles';

const Basket = () => {
  const products = useSelector((store) => store.basket.basket);
  const basketValue = useSelector((store) => store.basket.basketValue);
  const basketState = useSelector((store) => store.nav.basketView);
  const dispatch = useDispatch();
  const handleCloseBasket = () => dispatch(closeBasket(false));

  return (
    <StickyWrapper>
      <StyledSlideOut isVisible={basketState} from={'right'}>
        <Header>
          <Wrapper>
            <BasketCloseButton onClick={handleCloseBasket}>X</BasketCloseButton>
            <StyledTitle color={'#595959'}>Koszyk</StyledTitle>
          </Wrapper>
          <Paragraph>
            {basketValue <= 200
              ? `Dodaj do koszyka produkty za ${
                  200 - basketValue
                } zł i uzyskaj darmową przesyłkę`
              : `Zamówienie kwalifikuje się do darmowej przesyłki`}
          </Paragraph>
        </Header>
        <ItemsList>
          {products.length ? (
            products.map((product, index) => (
              <ProductInBasket
                name={product.name}
                price={product.price}
                img={product.img}
                id={product.id}
                quantity={product.quantity}
                key={`${product}${index}`}
              />
            ))
          ) : (
            <StyledTitle>Twój koszyk jest pusty</StyledTitle>
          )}
        </ItemsList>
        {basketValue > 0 && (
          <Checkout>
            <StyledButton
              backgroundColor={'#d4e4d4'}
              backgroundColorHover={'#fff'}
              fontColorMain={'#303030'}
              fontColorHover={'#bbccbb'}
              borderColor={'#bbccbb'}
            >
              Do kasy - {basketValue} złotych
            </StyledButton>
          </Checkout>
        )}
      </StyledSlideOut>
    </StickyWrapper>
  );
};

export default Basket;
