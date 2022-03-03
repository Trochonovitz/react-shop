import React from 'react';
import {
  StyledSlideOut,
  Header,
  Title,
  SortCloseButton,
  SortName,
  Content,
} from './FilterSort.styles';

const FilterSort = ({ setVisibility, setSortOption, style, ...props }) => {
  const handleCloseSort = () => setVisibility({ sort: false });
  const handleSortOption = (value) => setSortOption(value);
  const sortOptions = ['A-Z', 'Z-A', 'Od najtańszej'];

  return (
    <StyledSlideOut bottom {...props}>
      <Header>
        <SortCloseButton onClick={handleCloseSort}>X</SortCloseButton>
        <Title textType="h2">Sortuj</Title>
      </Header>
      <Content>
        {sortOptions.map((option, index) => (
          <SortName
            key={index}
            textType="h3"
            onClick={(event) => handleSortOption(event.currentTarget.innerHTML)}
          >
            {option}
          </SortName>
        ))}
      </Content>
    </StyledSlideOut>
  );
};

export default FilterSort;
