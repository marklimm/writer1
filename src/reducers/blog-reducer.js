import * as actions from'../actions/blog-actions'



const INITIAL_STATE = {
  '1': {
    blogId: 1,
    name: 'First Blog Test',
    description: 'description of first blog test'
  },
  '2': {
    blogId: 2,
    name: 'Super cool newsletter',
    description: 'description of super cool newsletter'
  },
  '3': {
    blogId: 3,
    name: 'Third blog',
    description: 'description of third blog'
  }
};


export default (state = INITIAL_STATE, action) => {

  if (!action || !action.type) {
    return state;
  }

  switch (action.type) {
    //
    //case actions.ADD_ITEM:
    //
    //  let maxItemId = 99
    //  if(Object.keys(state).length > 0) {
    //    maxItemId = Object.keys(state).map(itemId => {
    //      return parseInt(itemId, 10)
    //    }).max()
    //  }
    //
    //  const newId = maxItemId + 1
    //
    //  return {
    //    ...state,
    //    [newId]: {
    //      itemId: newId,
    //      name: action.payload.name,
    //      description: action.payload.description,
    //      price: action.payload.price,
    //      dateCreated: null
    //    }
    //  }

    case actions.GET_BLOGS:
      return state



    default:
      return state;
  }
}
