import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 200px;
  border: 1px solid black;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductInBasket = ({ productName, productPrice }) => (
  <StyledWrapper>
    <p>{productName}</p>
    <p>{productPrice} PLN</p>
  </StyledWrapper>
);

ProductInBasket.propTypes = {
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.string.isRequired,
};

export default ProductInBasket;
