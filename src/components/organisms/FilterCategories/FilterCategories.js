import React from 'react';

import {
  FiltersCloseButton,
  Header,
  Title,
  StyledSlideOut,
  Categories,
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
      <Categories>
        <CategoryName textType="h3" main>
          Kategorie
        </CategoryName>
        {categories.map((category) => (
          <CategoryName textType="h3">{category}</CategoryName>
        ))}
      </Categories>
    </StyledSlideOut>
  );
};

export default FilterCategories;
