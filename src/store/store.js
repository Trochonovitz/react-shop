import { createStore } from 'redux';

const actionsTypes = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  INCREMENT_VALUE: 'INCREMENT_VALUE',
};

export const addItem = (payload) => {
  alert(`Dodałeś ${payload.name} do koszyka`);
  return {
    type: actionsTypes.ADD_ITEM,
    payload,
  };
};

export const removeItem = (payload) => {
  return {
    type: actionsTypes.REMOVE_ITEM,
    payload,
  };
};

export const incrementBasketValue = (payload) => {
  return {
    type: actionsTypes.INCREMENT_VALUE,
    payload,
  };
};

const initialState = {
  basket: [],
  basketValue: 0,
};

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD_ITEM:
      if (state.basket.find(({ id }) => id === payload.id)) return { ...state };
      else
        return {
          ...state,
          basket: [...state.basket, payload],
          basketValue: payload.price + state.basketValue,
        };

    case actionsTypes.INCREMENT_VALUE:
      state.basket[
        state.basket.findIndex((item) => item.id === payload.id)
      ].quantity = payload.incrementValue;

      return {
        ...state,
        basketValue: state.basket.reduce(
          (acc, current) => acc + current.price * current.quantity,
          0
        ),
      };

    case actionsTypes.REMOVE_ITEM:
      return {
        ...state,
        basket: [
          ...state.basket.filter((element) => element.id !== payload.id),
        ],
        basketValue: state.basketValue - payload.price * payload.quantity,
      };
    default:
      return state;
  }
};

export const store = createStore(
  shopReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
