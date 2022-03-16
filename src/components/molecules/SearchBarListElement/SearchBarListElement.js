import React from 'react';
import { Image, InfoBox, Title, Wrapper } from './SearchBarListElement.styles';

const SearchBarListElement = ({ name, image, price }) => (
  <Wrapper>
    <Image srcSet={image} />
    <InfoBox>
      <Title textType="h3">{name}</Title>
      <Title textType="h3">{price} ZŁ</Title>
    </InfoBox>
  </Wrapper>
);

export default SearchBarListElement;
