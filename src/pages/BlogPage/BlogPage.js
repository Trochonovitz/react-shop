import React, { useState } from 'react';
import { useQuery } from 'graphql-hooks';
import { useContent } from 'hooks/useContent';
import MainTemplate from 'templates/MainTemplate';
import BlogArticle from 'components/molecules/BlogArticle/BlogArticle';
import { BlogContent, Header, StyledTitle } from './BlogPage.styles';

const BlogPage = () => {
  const { blogsArticlesQuery } = useContent();
  const { loading, error, data } = useQuery(blogsArticlesQuery);
  const [pickedCategory, setCategory] = useState('wszystkie');

  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';

  const articles = data.allArticles;
  const filteredArticles = articles.filter(
    (item) => item.category === pickedCategory
  );

  return (
    <MainTemplate>
      <Header>
        <StyledTitle color="#595959">Papiernicze inspiracje</StyledTitle>
        <ul>
          <li onClick={() => setCategory('wszystkie')}>wszystkie</li>
          {articles.map(({ category }) => (
            <li onClick={() => setCategory(category)}>{category}</li>
          ))}
        </ul>
        <BlogContent>
          {pickedCategory === 'wszystkie'
            ? articles.map(
                ({ id, category, title, mainPhoto: { url }, content }) => (
                  <BlogArticle
                    key={id}
                    category={category}
                    title={title}
                    img={url}
                    content={content}
                  />
                )
              )
            : filteredArticles.map(
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
