const actionTypes = {
  OPEN_MOBILE_NAV: 'OPEN_MOBILE_NAV',
  CLOSE_MOBILE_NAV: 'CLOSE_MOBILE_NAV',
  OPEN_BASKET_VIEW: 'OPEN_BASKET_VIEW',
  CLOSE_BASKET_VIEW: 'CLOSE_BASKET_VIEW',
};
const initialState = { mobileNav: false, basketView: false };

export const openMobileNav = (payload) => {
  return { type: actionTypes.OPEN_MOBILE_NAV, payload };
};
export const closeMobileNav = (payload) => {
  return { type: actionTypes.CLOSE_MOBILE_NAV, payload };
};
export const openBasket = (payload) => {
  return { type: actionTypes.OPEN_BASKET_VIEW, payload };
};
export const closeBasket = (payload) => {
  return { type: actionTypes.CLOSE_BASKET_VIEW, payload };
};

export const navReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.OPEN_MOBILE_NAV:
      return {
        ...state,
        mobileNav: payload,
      };
    case actionTypes.CLOSE_MOBILE_NAV:
      return {
        ...state,
        mobileNav: payload,
      };
    case actionTypes.OPEN_BASKET_VIEW:
      return {
        ...state,
        basketView: payload,
      };
    case actionTypes.CLOSE_BASKET_VIEW:
      return {
        ...state,
        basketView: payload,
      };
    default:
      return state;
  }
};
