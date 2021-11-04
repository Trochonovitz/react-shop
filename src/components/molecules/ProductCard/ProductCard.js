import React from 'react';
import { connect } from 'react-redux';
import { Wrapper, Header2, Image } from './ProductCard.styles';
import { addItemToBasket } from '../../../actions/actions';

const ProductCard = () => (
  <Wrapper>
    <Image
      alt="product 1"
      src="https://cdn.shopify.com/s/files/1/0594/6743/2116/products/17110-uma-notes-niebieski-01_1200x.jpg?v=1632316508"
    />
    <Header2>Notatnik Uma - granatowy</Header2>
    <Header2>90 zł</Header2>
    {/* <StyledButton onClick={() => addItemToBasket(productName, productPrice)}>
      Add to basket
    </StyledButton> */}
  </Wrapper>
);

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToBasket: (productName, productPrice) =>
      dispatch(addItemToBasket(productName, productPrice)),
  };
};

// ProductCard.propTypes = {
//   productName: PropTypes.string.isRequired,
//   productPrice: PropTypes.number.isRequired,
//   addItemToBasket: PropTypes.func.isRequired,
//   photo: PropTypes.string.isRequired,
// };

export default connect(null, mapDispatchToProps)(ProductCard);
