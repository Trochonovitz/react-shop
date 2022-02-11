import React from 'react';
import Text from 'components/atoms/Text/Text';
import {
  Wrapper,
  Image,
  StyledButton,
  Category,
  TextBox,
  Title,
} from './BlogArticle.styles';
import { Link } from 'react-router-dom';

const BlogArticle = ({ id, category, title, img, lead, style }) => (
  <Wrapper style={style}>
    <Image src={img} alt="article's visualisation" />
    <TextBox>
      <Category textType="p">{category}</Category>
      <Title textType="h2">{title}</Title>
      <Text>{lead}</Text>
    </TextBox>
    <Link to={`/blog/${id}`}>
      <StyledButton buttonType={'underline'}>Czytaj dalej</StyledButton>
    </Link>
  </Wrapper>
);

export default BlogArticle;
