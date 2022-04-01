import React, { useEffect, useState } from 'react';
import { useContent } from 'hooks/useContent';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import {
  Wrapper,
  CategoryButton,
  Title,
  CategorySection,
} from './BlogPage.styles';
import Articles from 'components/organisms/Articles/Articles';

const BlogPage = () => {
  const [articles, setArticles] = useState([]);
  const [pickedCategory, setCategory] = useState('wszystkie');
  const { getArticles } = useContent();
  const filteredArticles =
    pickedCategory === 'wszystkie'
      ? articles
      : articles.filter((item) => item.category === pickedCategory);
  const handleCategory = (category) => setCategory(category);

  useEffect(() => {
    let flag = false;
    (async () => {
      const fetchedArticles = await getArticles();
      if (!flag) {
        setArticles(fetchedArticles);
      }
    })();

    return () => (flag = true);
  }, [getArticles]);

  return (
    <MainTemplate>
      <Wrapper>
        <Title textType="h1">Papiernicze inspiracje</Title>
        <CategorySection>
          <CategoryButton
            onClick={() => handleCategory('wszystkie')}
            activeCategory="wszystkie"
            pickedCategory={pickedCategory}
          >
            wszystkie
          </CategoryButton>
          {articles.map(({ category }, index) => (
            <CategoryButton
              key={index}
              onClick={() => handleCategory(category)}
              activeCategory={category}
              pickedCategory={pickedCategory}
            >
              {category}
            </CategoryButton>
          ))}
        </CategorySection>
        <Articles articles={filteredArticles} option={pickedCategory} />
      </Wrapper>
    </MainTemplate>
  );
};

export default BlogPage;
