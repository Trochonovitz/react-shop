import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { closeSort } from 'store/navigation';
import {
  StyledSlideOut,
  Header,
  Title,
  SortCloseButton,
  SortName,
  Content,
} from './FilterSort.styles';

const FilterSort = ({ setSortOption }) => {
  const dispatch = useDispatch();
  const sortState = useSelector((store) => store.nav.sort);
  const sortOptions = ['A-Z', 'Z-A', 'Od najtańszej'];
  const closeFilterSort = () => dispatch(closeSort(false));
  const handleSortOption = (value) => setSortOption(value);

  return (
    <StyledSlideOut slideType="bottom" isVisible={sortState}>
      <Header>
        <SortCloseButton onClick={closeFilterSort}>X</SortCloseButton>
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
  setSortOption: PropTypes.func.isRequired,
};

export default FilterSort;
