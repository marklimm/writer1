import * as actions from'../actions/author-actions'


const INITIAL_STATE = {
  list: []
};


export default (state = INITIAL_STATE, action) => {

  if (!action || !action.type) {
    return state;
  }


  switch (action.type) {
    case actions.RECEIVED_AUTHORS:
      return {
        ...state,
        list: action.payload.authors
      }

  default:
    return state;
  }
}
