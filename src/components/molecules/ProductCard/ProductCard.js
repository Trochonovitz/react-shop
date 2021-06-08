import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../../atoms/Header/Header';

import { addItemToBasket } from '../../../actions/actions';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 30%;
`;

const StyledImage = styled.img`
  width: 30%;
`;

const StyledHeader = styled(Header)`
  margin: 0;
  padding: 10px;
  font-size: 1rem;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: 3px solid black;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  padding: 10px;
`;

const ProductCard = ({ productName, productPrice, addItemToBasket, photo }) => (
  <StyledWrapper>
    <StyledImage alt="product 1" src={photo} />
    <StyledHeader>{productName}</StyledHeader>
    <p>Price: {productPrice} PLN</p>
    <StyledButton onClick={() => addItemToBasket(productName, productPrice)}>
      Add to basket
    </StyledButton>
  </StyledWrapper>
);

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToBasket: (productName, productPrice) =>
      dispatch(addItemToBasket(productName, productPrice)),
  };
};

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  addItemToBasket: PropTypes.func.isRequired,
  photo: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(ProductCard);
