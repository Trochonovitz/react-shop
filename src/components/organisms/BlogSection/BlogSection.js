import React from 'react';
import { useQuery } from 'graphql-hooks';
import {
  BlogWrapper,
  BlogHeader,
  StyledParagraph,
  BlogTitle,
} from './BlogSection.styles';
import BlogArticle from 'components/molecules/BlogArticle/BlogArticle';
import { Button } from 'components/atoms/Buttton/Button';

const query = `query
{
  allArticles {
    id
    category
		title
    mainPhoto {
      url(imgixParams: {})
    }
    content
  }
}
`;

const BlogSection = () => {
  const { loading, error, data } = useQuery(query);

  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';

  return (
    <BlogWrapper>
      <BlogHeader>
        <StyledParagraph>czytaj</StyledParagraph>
        <BlogTitle>Artykuły na blogu</BlogTitle>
      </BlogHeader>

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

      <Button
        width={'70%'}
        backgroundColor={'#d4e4d4'}
        backgroundColorHover={'#fff'}
        fontColorMain={'#303030'}
        fontColorHover={'#bbccbb'}
        borderColor={'#bbccbb'}
      >
        Przejdź do bloga
      </Button>
    </BlogWrapper>
  );
};

export default BlogSection;
