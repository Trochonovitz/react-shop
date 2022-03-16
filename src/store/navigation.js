const actionTypes = {
  OPEN_MOBILE_NAV: 'OPEN_MOBILE_NAV',
  CLOSE_MOBILE_NAV: 'CLOSE_MOBILE_NAV',
  OPEN_BASKET_VIEW: 'OPEN_BASKET_VIEW',
  CLOSE_BASKET_VIEW: 'CLOSE_BASKET_VIEW',
  OPEN_SEARCHBAR: 'OPEN_SEARCHBAR',
  CLOSE_SEARCHBAR: 'CLOSE_SEARCHBAR',
  OPEN_FILTER: 'OPEN_FILTER',
  CLOSE_FILTER: 'CLOSE_FILTER',
  OPEN_SORT: 'OPEN_SORT',
  CLOSE_SORT: 'CLOSE_SORT',
};
const initialState = {
  mobileNav: false,
  basketView: false,
  searchBar: false,
  filter: false,
  sort: false,
};

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
export const openSearchBar = (payload) => {
  return { type: actionTypes.OPEN_SEARCHBAR, payload };
};
export const closeSearchBar = (payload) => {
  return { type: actionTypes.CLOSE_SEARCHBAR, payload };
};
export const openFilter = (payload) => {
  return { type: actionTypes.OPEN_FILTER, payload };
};
export const closeFilter = (payload) => {
  return { type: actionTypes.CLOSE_FILTER, payload };
};
export const openSort = (payload) => {
  return { type: actionTypes.OPEN_SORT, payload };
};
export const closeSort = (payload) => {
  return { type: actionTypes.CLOSE_SORT, payload };
};

export const navReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.OPEN_MOBILE_NAV:
      return {
        mobileNav: payload,
        basketView: false,
        searchBar: false,
        filter: false,
        sort: false,
      };
    case actionTypes.CLOSE_MOBILE_NAV:
      return {
        ...state,
        mobileNav: payload,
      };
    case actionTypes.OPEN_BASKET_VIEW:
      return {
        basketView: payload,
        searchBar: false,
        mobileNav: false,
        filter: false,
        sort: false,
      };
    case actionTypes.CLOSE_BASKET_VIEW:
      return {
        ...state,
        basketView: payload,
      };
    case actionTypes.OPEN_SEARCHBAR:
      return {
        searchBar: payload,
        mobileNav: false,
        basketView: false,
        filter: false,
        sort: false,
      };
    case actionTypes.CLOSE_SEARCHBAR:
      return {
        ...state,
        searchBar: payload,
      };
    case actionTypes.OPEN_FILTER:
      return {
        filter: payload,
        mobileNav: false,
        basketView: false,
        searchBar: false,
        sort: false,
      };
    case actionTypes.CLOSE_FILTER:
      return {
        ...state,
        filter: payload,
      };
    case actionTypes.OPEN_SORT:
      return {
        sort: payload,
        filter: false,
        mobileNav: false,
        basketView: false,
        searchBar: false,
      };
    case actionTypes.CLOSE_SORT:
      return {
        ...state,
        sort: payload,
      };
    default:
      return state;
  }
};
