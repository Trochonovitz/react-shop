import React from 'react';
import styled from 'styled-components';

import catalog from '../../catalog.json';
import MainTemplate from '../../templates/MainTemplate';
import ProductCard from '../../components/molecules/ProductCard/ProductCard';

import photo from '../../assets/photo1.png';

const StyledWrapper = styled.div`
  display: flex;
  width: 75%;
  justify-content: center;
  flex-wrap: wrap;
`;

const GamesPage = () => (
  <MainTemplate>
    <StyledWrapper>
      {catalog.map(({ productName, productPrice }) => (
        <ProductCard
          key={productName}
          productName={productName}
          productPrice={productPrice}
          photo={photo}
        />
      ))}
    </StyledWrapper>
  </MainTemplate>
);

export default GamesPage;
