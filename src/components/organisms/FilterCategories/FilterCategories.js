import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiltersCloseButton,
  Header,
  Title,
  StyledSlideOut,
  Content,
  CategoryName,
} from './FilterCategories.styles';

const FilterCategories = ({ setVisibility, ...props }) => {
  const handleCloseFilterCategories = () => setVisibility({ filter: false });
  const categories = ['notatnik', 'długopis', 'kartka'];

  return (
    <StyledSlideOut $from="right" {...props}>
      <Header>
        <Title textType="h2">Filtry</Title>
        <FiltersCloseButton onClick={handleCloseFilterCategories}>
          X
        </FiltersCloseButton>
      </Header>
      <Content>
        <CategoryName textType="h3" main>
          Kategorie
        </CategoryName>
        {categories.map((category, index) => (
          <CategoryName
            key={index}
            as={Link}
            to={`/sklep/kolekcja/${category}`}
          >
            {category}
          </CategoryName>
        ))}
      </Content>
    </StyledSlideOut>
  );
};

export default FilterCategories;
