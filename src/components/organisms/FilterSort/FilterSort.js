import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledSlideOut,
  Header,
  Title,
  SortCloseButton,
  SortName,
  Content,
} from './FilterSort.styles';

const FilterSort = ({ setVisibility, setSortOption, isVisible }) => {
  const handleCloseSort = () => setVisibility({ sort: false });
  const handleSortOption = (value) => setSortOption(value);
  const sortOptions = ['A-Z', 'Z-A', 'Od najtańszej'];

  return (
    <StyledSlideOut slideType="bottom" isVisible={isVisible}>
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

FilterSort.propTypes = {
  setVisibility: PropTypes.func.isRequired,
  setSortOption: PropTypes.func.isRequired,
};

export default FilterSort;
