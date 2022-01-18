import { combineReducers } from 'redux';
import { basketReducer } from './basket';
import { navReducer } from './navigation';

const rootReducer = combineReducers({
  basket: basketReducer,
  nav: navReducer,
});

export default rootReducer;
