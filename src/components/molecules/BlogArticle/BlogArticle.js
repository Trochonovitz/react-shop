import React from 'react';
import {
  BlogsArticle,
  Image,
  StyledParagraph,
  BlogTitle,
  BlogButton,
} from './BlogArticle.styles';

const img =
  'https://cdn.shopify.com/s/files/1/0594/6743/2116/articles/albumynazdjecia_blog3_1600x.jpg?v=1634044948';

const BlogArticle = () => (
  <BlogsArticle>
    <Image src={img} alt="article's visualisation" />
    <StyledParagraph>Polecamy</StyledParagraph>
    <BlogTitle>Tytuł</BlogTitle>
    <p>
      Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
    </p>
    <BlogButton>Czytaj dalej</BlogButton>
  </BlogsArticle>
);

export default BlogArticle;
