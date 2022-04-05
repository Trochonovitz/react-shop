import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'graphql-hooks';
import { useCombobox } from 'downshift';
import { closeSearchBar } from 'store/navigation';
import { useContent } from 'hooks/useContent';
import { icons } from 'theme/theme';
import { NavigationHeightContext } from 'templates/MainTemplate/MainTemplate';
import { ScrollPositionContext } from 'pages/HomePage/HomePage';
import SearchBarListElement from 'components/molecules/SearchBarListElement/SearchBarListElement';
import {
  Button,
  ListElements,
  StyledIcon,
  StyledInput,
  StyledLink,
  StyledSlideOut,
  Wrapper,
} from './SearchBar.styles';

const SearchBar = () => {
  const [products, setProducts] = useState([]);
  const [inputItems, setInputItems] = useState(products);
  const { allProductsQuery } = useContent();
  const { data, loading } = useQuery(allProductsQuery);
  const { heightNav, heightInfoBox } = useContext(NavigationHeightContext);
  const scrollPosition = useContext(ScrollPositionContext);
  const dispatch = useDispatch();
  const searchBarState = useSelector((store) => store.nav.searchBar);
  const handleCloseSearchBar = () => dispatch(closeSearchBar(false));
  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        products.filter((item) =>
          item.name.toUpperCase().includes(inputValue.toUpperCase())
        )
      );
    },
  });

  useEffect(() => {
    let flag = false;
    if (!flag && !loading) setProducts(data.allProducts);
    return () => (flag = true);
  }, [data, loading]);

  return (
    <StyledSlideOut
      slideType="top"
      heightNav={heightNav}
      heightInfoBox={heightInfoBox}
      isVisible={searchBarState}
      scrollPosition={scrollPosition}
    >
      <StyledIcon size="20" path={icons.search} />
      <Wrapper {...getComboboxProps()}>
        <StyledInput
          {...getInputProps()}
          placeholder="Szukaj"
          data-testid="searchBar-input"
        />
        <ListElements
          {...getMenuProps()}
          heightNav={heightNav}
          heightInfoBox={heightInfoBox}
        >
          {isOpen &&
            inputItems.map((item, index) => (
              <li {...getItemProps({ item, index })} key={index}>
                <StyledLink to={`/sklep/${item.id}`}>
                  <SearchBarListElement
                    name={item.name}
                    price={item.price}
                    image={item.productVisualisation.responsiveImage.srcSet}
                  />
                </StyledLink>
              </li>
            ))}
        </ListElements>
      </Wrapper>
      <Button onClick={handleCloseSearchBar}>X</Button>
    </StyledSlideOut>
  );
};

export default SearchBar;
