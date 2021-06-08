import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MainTemplate from '../../templates/MainTemplate';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';

import ProductInBasket from '../../components/molecules/ProductInBasket/ProductInBasket';

const BasketPage = ({ state }) => (
  <MainTemplate>
    <Paragraph>
      {state.length === 0 ? 'Twoj koszyk jest pusty!' : 'Twoje przedmioty:'}

      {state.map(({ productName, productPrice }) => (
        <ProductInBasket
          productName={productName}
          productPrice={productPrice}
        />
      ))}
    </Paragraph>
  </MainTemplate>
);

BasketPage.propTypes = {
  state: PropTypes.objectOf().isRequired,
};

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(BasketPage);
