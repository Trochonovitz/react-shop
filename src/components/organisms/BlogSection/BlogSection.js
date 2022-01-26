import React from 'react';
import { useQuery } from 'graphql-hooks';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from 'theme/theme';
import { useContent } from 'hooks/useContent';
import Button from 'components/atoms/Button/Button';
import Text from 'components/atoms/Text/Text';
import BlogArticle from 'components/molecules/BlogArticle/BlogArticle';
import {
  BlogWrapper,
  BlogHeader,
  Title,
  StyledLink,
  BlogContent,
} from './BlogSection.styles';

const BlogSection = () => {
  const tabletView = useMediaQuery({ query: breakpoints.maxTablet });
  const { blogsArticlesQuery } = useContent(`(first: ${tabletView ? 2 : 3})`);
  const { loading, error, data } = useQuery(blogsArticlesQuery);

  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';

  return (
    <BlogWrapper>
      <BlogHeader>
        <Text textType="p">czytaj</Text>
        <Title textType="h2">Artykuły na blogu</Title>
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
      <StyledLink to="/blog">
        <Button buttonType="green">Przejdź do bloga</Button>
      </StyledLink>
    </BlogWrapper>
  );
};

export default BlogSection;
