import React from 'react';
import { useContent } from 'hooks/useContent';
import { useQuery } from 'graphql-hooks';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import {
  Wrapper,
  Header,
  Image,
  Lead,
  Title,
  Content,
  Subtitle,
} from './DetailPageBlogArticle.styles';

const DetailPageBlogArticle = () => {
  const { id } = useParams();
  const { blogArticleQuery } = useContent(null, id);
  const { loading, error, data } = useQuery(blogArticleQuery);

  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';

  const article = data.allArticles[0];
  const image = article.mainPhoto.url;
  const category = article.category;
  const title = article.title;
  const lead = article.lead;
  const date = article._firstPublishedAt;
  const content = article.content;

  return (
    <MainTemplate>
      <Image alt="blog's article visualisation" src={image} />
      <Wrapper>
        <Header>
          <Subtitle textType="p">
            {date} - {category}
          </Subtitle>
          <Title textType="h1">{title}</Title>
        </Header>
        <Lead>{lead}</Lead>
        <Content>{ReactHtmlParser(content)}</Content>
      </Wrapper>
    </MainTemplate>
  );
};

export default DetailPageBlogArticle;
