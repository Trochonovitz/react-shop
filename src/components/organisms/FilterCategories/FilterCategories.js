import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeFilter } from 'store/navigation';
import {
  FiltersCloseButton,
  Header,
  Title,
  StyledSlideOut,
  Content,
  CategoryName,
} from './FilterCategories.styles';

const FilterCategories = () => {
  const dispatch = useDispatch();
  const filterState = useSelector((store) => store.nav.filter);
  const categories = ['notatnik', 'długopis', 'kartka'];
  const closeFilterCategories = () => dispatch(closeFilter(false));

  return (
    <StyledSlideOut slideType="right" isVisible={filterState}>
      <Header>
        <Title textType="h2">Filtry</Title>
        <FiltersCloseButton onClick={closeFilterCategories}>
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
