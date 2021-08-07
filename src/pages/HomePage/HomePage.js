import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MainTemplate from '../../templates/MainTemplate';
import ProductCard from '../../components/molecules/ProductCard/ProductCard';

const StyledWrapper = styled.div`
  display: flex;
  width: 75%;
  justify-content: center;
`;

const HomePage = ({ state }) => {
  const mostPopularItems = state
    .slice(2)
    .map(({ productName, productPrice }) => (
      <ProductCard
        key={productName}
        productName={productName}
        productPrice={productPrice}
      />
    ));

  return (
    <MainTemplate>
      <StyledWrapper>
        {mostPopularItems.lenght === 0 ? (
          mostPopularItems
        ) : (
          <h1>
            Witamy w naszym sklepie! Przejdź do zakładek, by wybrać interesujący
            Cię przedmiot!
          </h1>
        )}
      </StyledWrapper>
    </MainTemplate>
  );
};

HomePage.propTypes = {
  state: PropTypes.objectOf().isRequired,
};

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(HomePage);
