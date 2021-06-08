export const addItemToBasket = (productName, productPrice) => {
  return {
    type: 'ADD_ITEM',
    payload: {
      productName,
      productPrice,
    },
  };
};
