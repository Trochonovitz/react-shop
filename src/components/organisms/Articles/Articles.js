import React from 'react';
import { useLocation } from 'react-router-dom';
import { animated, useTransition } from '@react-spring/web';
import Button from 'components/atoms/Button/Button';
import Text from 'components/atoms/Text/Text';
import BlogArticle from 'components/molecules/BlogArticle/BlogArticle';
import {
  BlogWrapper,
  BlogHeader,
  Title,
  StyledLink,
  BlogContent,
} from './Articles.styles';

const Articles = ({ articles, option = '' }) => {
  const { pathname } = useLocation();
  const AnimatedBlogArticle = animated(BlogArticle);
  const transition = useTransition(option, {
    from: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1 },
  });

  return (
    <BlogWrapper>
      {pathname !== '/blog' && (
        <BlogHeader>
          <Text textType="p">czytaj</Text>
          <Title textType="h2">Artykuły na blogu</Title>
        </BlogHeader>
      )}
      <BlogContent>
        {articles.map(
          ({
            id,
            category,
            title,
            mainPhoto: {
              responsiveImage: { srcSet },
            },
            lead,
          }) =>
            transition((style) => (
              <AnimatedBlogArticle
                style={style}
                key={id}
                id={id}
                category={category}
                title={title}
                img={srcSet}
                lead={lead}
              />
            ))
        )}
      </BlogContent>
      {pathname !== '/blog' && (
        <StyledLink to="/blog">
          <Button buttonType="green">Przejdź do bloga</Button>
        </StyledLink>
      )}
    </BlogWrapper>
  );
};

export default Articles;
