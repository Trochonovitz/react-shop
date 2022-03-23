import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useCombobox } from 'downshift';
import { closeSearchBar } from 'store/navigation';
import { useContent } from 'hooks/useContent';
import { NavigationHeightContext } from 'templates/MainTemplate/MainTemplate';
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
import { ScrollPositionContext } from 'pages/HomePage/HomePage';
import { icons } from 'theme/theme';

const SearchBar = () => {
  const [products, setProducts] = useState([]);
  const [inputItems, setInputItems] = useState(products);
  const { heightNav, heightInfoBox } = useContext(NavigationHeightContext);
  const scrollPosition = useContext(ScrollPositionContext);
  const { productInfoQuery } = useContent();
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
    const controller = new AbortController();
    const { signal } = controller;
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'https://graphql.datocms.com/',
          { query: productInfoQuery, signal },
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
            },
          }
        );
        const products = response.data.data.allProducts;
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => controller.abort();
  }, [productInfoQuery]);

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
        <StyledInput {...getInputProps()} placeholder="Szukaj" />
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
