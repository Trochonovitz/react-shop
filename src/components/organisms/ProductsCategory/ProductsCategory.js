import React from 'react';
import { StyledButton, Wrapper } from './ProductsCategory.styles';
import ProductCard from 'components/molecules/ProductCard/ProductCard';

const ProductsCategory = () => {
  const items = [
    {
      name: 'Notatnik Uma - granatowy',
      price: 90,
      img: 'https://cdn.shopify.com/s/files/1/0594/6743/2116/products/17110-uma-notes-niebieski-01_1200x.jpg?v=1632316508',
    },
    {
      name: 'Kartka - Peonia',
      price: 15,
      img: 'https://cdn.shopify.com/s/files/1/0594/6743/2116/products/17110-uma-notes-niebieski-01_1200x.jpg?v=1632316508',
    },
    {
      name: 'Aluminiowy długopis Caran dAche 849 Claim Your Style – Violet',
      price: 185,
      img: 'https://cdn.shopify.com/s/files/1/0594/6743/2116/products/17110-uma-notes-niebieski-01_1200x.jpg?v=1632316508',
    },
    {
      name: 'kartka - tukany',
      price: 15,
      img: 'https://cdn.shopify.com/s/files/1/0594/6743/2116/products/17110-uma-notes-niebieski-01_1200x.jpg?v=1632316508',
    },
    {
      name: 'Aluminiowy długopis Caran dAche 849 Claim Your Style – Tangerine',
      price: 185,
      img: 'https://cdn.shopify.com/s/files/1/0594/6743/2116/products/17110-uma-notes-niebieski-01_1200x.jpg?v=1632316508',
    },
    {
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
          ? items.map((item, index) => (
              <ProductCard
                name={item.name}
                price={item.price}
                img={item.img}
                key={`${item}${index}`}
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
      >
        Przejdź do sklepu
      </StyledButton>
    </>
  );
};

export default ProductsCategory;
