import { combineReducers } from 'redux';

//import AuthenticationReducer from './authenticationReducer';
import ItemReducer from './item-reducer';
//import { reducer as form } from 'redux-form'

const rootReducer = combineReducers({
    //state: (state = {}) => state

    //auth: AuthenticationReducer,
    //form,
    item: ItemReducer
});

export default rootReducer;
