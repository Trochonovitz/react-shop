import React from 'react';
import {
  BlogsArticle,
  Image,
  StyledParagraph,
  BlogButton,
  StyledTitle,
  TextBox,
} from './BlogArticle.styles';

const BlogArticle = ({ category, title, img, content }) => (
  <BlogsArticle>
    <Image src={img} alt="article's visualisation" />
    <TextBox>
      <StyledParagraph>{category}</StyledParagraph>
      <StyledTitle color={'#595959'}>{title}</StyledTitle>
      <p>{content}</p>
    </TextBox>
    <BlogButton>Czytaj dalej</BlogButton>
  </BlogsArticle>
);

export default BlogArticle;
