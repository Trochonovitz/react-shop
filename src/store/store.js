import { createStore } from 'redux';

const actionsTypes = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
};

export const addItem = (payload) => {
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

const initialState = {
  basket: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_ITEM:
      return { ...state, basket: [...state.basket, action.payload] };
    case actionsTypes.REMOVE_ITEM:
      return {
        ...state,
        basket: [
          ...state.basket.filter(
            (element) => element.name !== action.payload.name
          ),
        ],
      };
    default:
      return state;
  }
};

export const store = createStore(
  shopReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
