import React from 'react';
import {
  BlogsArticle,
  Image,
  StyledParagraph,
  BlogTitle,
  BlogButton,
} from './BlogArticle.styles';

const BlogArticle = ({ category, title, img, content }) => (
  <BlogsArticle>
    <Image src={img} alt="article's visualisation" />
    <StyledParagraph>{category}</StyledParagraph>
    <BlogTitle>{title}</BlogTitle>
    <p>{content}</p>
    <BlogButton>Czytaj dalej</BlogButton>
  </BlogsArticle>
);

export default BlogArticle;
