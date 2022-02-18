import React, { useState, Children } from 'react';
import { useQuery } from 'graphql-hooks';
import { useTransition, animated } from '@react-spring/web';
import { useContent } from 'hooks/useContent';
import MainTemplate from 'templates/MainTemplate';
import BlogArticle from 'components/molecules/BlogArticle/BlogArticle';
import {
  Wrapper,
  BlogContent,
  CategoryButton,
  Title,
  CategorySection,
} from './BlogPage.styles';

const BlogPage = () => {
  const { blogArticlesQuery } = useContent();
  const { loading, error, data } = useQuery(blogArticlesQuery);
  const [pickedCategory, setCategory] = useState('wszystkie');
  const transition = useTransition(pickedCategory, {
    from: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1 },
  });
  const AnimatedBlogArticle = animated(BlogArticle);

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
      <Wrapper>
        <Title textType="h1">Papiernicze inspiracje</Title>
        <CategorySection>
          <CategoryButton
            onClick={() => handleCategory('wszystkie')}
            activeCategory={`wszystkie`}
            pickedCategory={pickedCategory}
          >
            wszystkie
          </CategoryButton>
          {Children.toArray(
            allArticles.map(({ category }) => (
              <CategoryButton
                onClick={() => handleCategory(category)}
                activeCategory={category}
                pickedCategory={pickedCategory}
              >
                {category}
              </CategoryButton>
            ))
          )}
        </CategorySection>
        <BlogContent>
          {Children.toArray(
            filteredArticles.map(
              ({ id, category, title, mainPhoto: { url }, lead }) =>
                transition((style) => (
                  <AnimatedBlogArticle
                    style={style}
                    id={id}
                    category={category}
                    title={title}
                    img={url}
                    lead={lead}
                  />
                ))
            )
          )}
        </BlogContent>
      </Wrapper>
    </MainTemplate>
  );
};

export default BlogPage;
