import React from 'react';
import { Link } from 'react-router-dom';
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
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from 'theme/theme';

const BlogSection = () => {
  const tabletView = useMediaQuery({ query: breakpoints.maxTablet });
  const { blogsArticlesQuery } = useContent(`(first: ${tabletView ? 2 : 3})`);
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
        as={Link}
        to={'/blog'}
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
