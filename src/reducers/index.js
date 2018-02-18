import { combineReducers } from 'redux';

import ItemReducer from './item-reducer';
import BlogReducer from './blog-reducer';
import AuthorReducer from './author-reducer';
//import { reducer as form } from 'redux-form'

const rootReducer = combineReducers({
  //state: (state = {}) => state

  //form,
  author: AuthorReducer,
  blog: BlogReducer,
  item: ItemReducer
});

export default rootReducer;
