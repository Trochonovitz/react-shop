import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import MainTemplate from '../../templates/MainTemplate';
import ProductCard from '../../components/molecules/ProductCard/ProductCard';

const StyledWrapper = styled.div`
  display: flex;
  width: 75%;
  justify-content: center;
  flex-wrap: wrap;
`;

const AlcoholsCategoryPage = () => {
  const [beers, setBeers] = useState([]);

  const cancelToken = axios.CancelToken;
  const cancelSource = useRef(null);

  const baseURL = 'https://api.punkapi.com/v2/beers';

  const getAlhoholList = async () => {
    try {
      await axios
        .get(baseURL, {
          cancelToken: cancelSource.current.token,
        })
        .then((response) => setBeers(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cancelSource.current = cancelToken.source();
    getAlhoholList();

    return () => {
      cancelSource.current.cancel();
    };
  }, [baseURL]);

  return (
    <MainTemplate>
      <StyledWrapper>
        {beers.map(({ id, name, description, image_url }) => (
          <ProductCard
            key={id}
            productName={name}
            productPrice="90"
            photo={image_url}
          />
        ))}
      </StyledWrapper>
    </MainTemplate>
  );
};

export default AlcoholsCategoryPage;
