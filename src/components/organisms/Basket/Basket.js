import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeBasket } from 'store/navigation';
import ProductInBasket from 'components/molecules/ProductInBasket/ProductInBasket';
import {
  StyledSlideOut,
  Header,
  Wrapper,
  Title,
  BasketCloseButton,
  Paragraph,
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
    <StyledSlideOut isVisible={basketState} slideType="right">
      <Header>
        <Wrapper>
          <BasketCloseButton onClick={handleCloseBasket}>X</BasketCloseButton>
          <Title data-testid="basketTitle" textType="h2">
            Koszyk
          </Title>
        </Wrapper>
        <Paragraph>
          {basketValue >= 200
            ? `Zamówienie kwalifikuje się do darmowej przesyłki`
            : `Dodaj do koszyka produkty za ${
                200 - basketValue
              } zł i uzyskaj darmową przesyłkę`}
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
              key={index}
            />
          ))
        ) : (
          <Title>Twój koszyk jest pusty</Title>
        )}
      </ItemsList>
      {basketValue > 0 && (
        <Checkout>
          <StyledButton buttonType="green">
            Do kasy - {basketValue} złotych
          </StyledButton>
        </Checkout>
      )}
    </StyledSlideOut>
  );
};

export default Basket;
