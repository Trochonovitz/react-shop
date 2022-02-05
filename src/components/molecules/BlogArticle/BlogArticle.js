import React from 'react';
import Text from 'components/atoms/Text/Text';
import {
  BlogsArticle,
  Image,
  StyledButton,
  Category,
  TextBox,
  Title,
} from './BlogArticle.styles';

const BlogArticle = ({ category, title, img, content, style }) => (
  <BlogsArticle style={style}>
    <Image src={img} alt="article's visualisation" />
    <TextBox>
      <Category textType="p">{category}</Category>
      <Title textType="h2">{title}</Title>
      <Text>{content}</Text>
    </TextBox>
    <StyledButton buttonType={'underline'}>Czytaj dalej</StyledButton>
  </BlogsArticle>
);

export default BlogArticle;
