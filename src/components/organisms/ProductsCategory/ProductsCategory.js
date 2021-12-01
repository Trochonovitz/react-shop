import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton, Wrapper } from './ProductsCategory.styles';
import ProductCard from 'components/molecules/ProductCard/ProductCard';

const ProductsCategory = () => {
  const items = [
    {
      id: 1,
      name: 'Notatnik Uma - granatowy',
      price: 90,
      img: 'https://cdn.shopify.com/s/files/1/0594/6743/2116/products/17110-uma-notes-niebieski-01_1200x.jpg?v=1632316508',
    },
    {
      id: 2,
      name: 'Kartka - Peonia',
      price: 15,
      img: 'https://cdn.shopify.com/s/files/1/0594/6743/2116/products/17110-uma-notes-niebieski-01_1200x.jpg?v=1632316508',
    },
    {
      id: 3,
      name: 'Aluminiowy długopis Caran dAche 849 Claim Your Style – Violet',
      price: 185,
      img: 'https://cdn.shopify.com/s/files/1/0594/6743/2116/products/17110-uma-notes-niebieski-01_1200x.jpg?v=1632316508',
    },
    {
      id: 4,
      name: 'kartka - tukany',
      price: 15,
      img: 'https://cdn.shopify.com/s/files/1/0594/6743/2116/products/17110-uma-notes-niebieski-01_1200x.jpg?v=1632316508',
    },
    {
      id: 5,
      name: 'Aluminiowy długopis Caran dAche 849 Claim Your Style – Tangerine',
      price: 185,
      img: 'https://cdn.shopify.com/s/files/1/0594/6743/2116/products/17110-uma-notes-niebieski-01_1200x.jpg?v=1632316508',
    },
    {
      id: 6,
      name: 'Kwiatowy notatnik – suszone kwiaty',
      price: 115,
      img: 'https://cdn.shopify.com/s/files/1/0594/6743/2116/products/17110-uma-notes-niebieski-01_1200x.jpg?v=1632316508',
      quantity: 1,
    },
  ];

  return (
    <>
      <Wrapper>
        {items.length > 0
          ? items.map((item) => (
              <ProductCard
                name={item.name}
                price={item.price}
                img={item.img}
                id={item.id}
                key={`${item.name}${item.id}`}
              />
            ))
          : `Coś poszło nie tak. Ponownie przeładuj stronę!`}
      </Wrapper>
      <StyledButton
        backgroundColor={'#d4e4d4'}
        backgroundColorHover={'#fff'}
        fontColorMain={'#303030'}
        fontColorHover={'#bbccbb'}
        borderColor={'#bbccbb'}
        as={Link}
        to="/products"
      >
        Przejdź do sklepu
      </StyledButton>
    </>
  );
};

export default ProductsCategory;
