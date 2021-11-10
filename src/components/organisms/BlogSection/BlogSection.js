import React from 'react';
import { useQuery } from 'graphql-hooks';
import {
  BlogWrapper,
  BlogHeader,
  StyledParagraph,
  StyledTitle,
  StyledButton,
  BlogContent,
} from './BlogSection.styles';
import BlogArticle from 'components/molecules/BlogArticle/BlogArticle';

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
