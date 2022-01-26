import React, { useState } from 'react';
import { useQuery } from 'graphql-hooks';
import { useContent } from 'hooks/useContent';
import MainTemplate from 'templates/MainTemplate';
import BlogArticle from 'components/molecules/BlogArticle/BlogArticle';
import { colors } from 'theme/theme';
import {
  BlogContent,
  CategoryButton,
  Header,
  Title,
  Wrapper,
} from './BlogPage.styles';

const BlogPage = () => {
  const { blogsArticlesQuery } = useContent();
  const { loading, error, data } = useQuery(blogsArticlesQuery);
  const [pickedCategory, setCategory] = useState('wszystkie');

  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';

  const allArticles = data.allArticles;
  const filteredArticles =
    pickedCategory === 'wszystkie'
      ? allArticles
      : allArticles.filter((item) => item.category === pickedCategory);
  const handleCategory = (category) => setCategory(category);

  return (
    <MainTemplate>
      <Header>
        <Title textType="h1">Papiernicze inspiracje</Title>
        <Wrapper>
          <CategoryButton
            onClick={() => handleCategory('wszystkie')}
            activeCategory={`wszystkie`}
            pickedCategory={pickedCategory}
          >
            wszystkie
          </CategoryButton>
          {allArticles.map(({ category }, index) => (
            <CategoryButton
              key={`${category}${index}`}
              onClick={() => handleCategory(category)}
              activeCategory={category}
              pickedCategory={pickedCategory}
            >
              {category}
            </CategoryButton>
          ))}
        </Wrapper>
        <BlogContent>
          {filteredArticles.map(
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
      </Header>
    </MainTemplate>
  );
};

export default BlogPage;
