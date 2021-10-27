import React from 'react';
import {
  BlogWrapper,
  BlogHeader,
  StyledParagraph,
  BlogTitle,
} from './BlogSection.styles';
import BlogArticle from 'components/molecules/BlogArticle/BlogArticle';

//tutaj pobieram graphql z datocms i mapuje content

const BlogSection = () => (
  <BlogWrapper>
    <BlogHeader>
      <StyledParagraph>czytaj</StyledParagraph>
      <BlogTitle>Artykuły na blogu</BlogTitle>
      <BlogArticle />
    </BlogHeader>
  </BlogWrapper>
);

export default BlogSection;
