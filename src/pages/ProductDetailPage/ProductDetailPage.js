import React from 'react';
import { useParams } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';

const ProductDetailPage = () => (
  <MainTemplate>
    {console.log(useParams())}
    <h1>hello world</h1>
  </MainTemplate>
);

export default ProductDetailPage;
