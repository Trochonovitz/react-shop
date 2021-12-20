import React from 'react';
import { useQuery } from 'graphql-hooks';
import { useContent } from 'hooks/useContent';
import BlogArticle from 'components/molecules/BlogArticle/BlogArticle';
import {
  BlogWrapper,
  BlogHeader,
  StyledParagraph,
  StyledTitle,
  StyledButton,
  BlogContent,
} from './BlogSection.styles';

const BlogSection = () => {
  const { blogsArticlesQuery } = useContent();
  const { loading, error, data } = useQuery(blogsArticlesQuery);

  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';

  return (
    <BlogWrapper>
      <BlogHeader>
        <StyledParagraph>czytaj</StyledParagraph>
        <StyledTitle color={'#595959'}>Artykuły na blogu</StyledTitle>
      </BlogHeader>
      <BlogContent>
        {data.allArticles.map(
          ({ id, category, title, mainPhoto: { url }, content }) => (
            <BlogArticle
              key={id}
              category={category}
              title={title}
              img={url}
              content={content}
            />
          )
        )}
      </BlogContent>
      <StyledButton
        backgroundColor={'#d4e4d4'}
        backgroundColorHover={'#fff'}
        fontColorMain={'#303030'}
        fontColorHover={'#bbccbb'}
        borderColor={'#bbccbb'}
      >
        Przejdź do bloga
      </StyledButton>
    </BlogWrapper>
  );
};

export default BlogSection;
