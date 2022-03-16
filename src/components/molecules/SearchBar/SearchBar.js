import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useCombobox } from 'downshift';
import { closeSearchBar } from 'store/navigation';
import { useContent } from 'hooks/useContent';
import { NavigationHeightContext } from 'templates/MainTemplate/MainTemplate';
import SearchBarListElement from 'components/molecules/SearchBarListElement/SearchBarListElement';
import {
  ListElements,
  StyledInput,
  StyledLink,
  StyledSlideOut,
  Wrapper,
} from './SearchBar.styles';

const SearchBar = () => {
  const [products, setProducts] = useState([]);
  const [inputItems, setInputItems] = useState(products);
  const { heightNav, heightInfoBox } = useContext(NavigationHeightContext);
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
          item.name.toUpperCase().startsWith(inputValue.toUpperCase())
        )
      );
    },
  });

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
      },
    };
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'https://graphql.datocms.com/',
          { query: productInfoQuery },
          config
        );
        const products = response.data.data.allProducts;
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [productInfoQuery]);

  return (
    <StyledSlideOut
      slideType="top"
      heightNav={heightNav}
      heightInfoBox={heightInfoBox}
      isVisible={searchBarState}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="bi bi-search"
        viewBox="0 0 16 16"
        width="16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
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
      <p onClick={handleCloseSearchBar}>X</p>
    </StyledSlideOut>
  );
};

export default SearchBar;
