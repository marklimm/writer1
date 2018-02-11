import { combineReducers } from 'redux';

import ItemReducer from './item-reducer';
import AuthorReducer from './author-reducer';
//import { reducer as form } from 'redux-form'

const rootReducer = combineReducers({
  //state: (state = {}) => state

  //form,
  author: AuthorReducer,
  item: ItemReducer
});

export default rootReducer;
