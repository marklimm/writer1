import * as actions from'../actions/blog-actions'



const INITIAL_STATE = {
  '1': {
    blogId: 1,
    name: 'First Blog Test',
    description: 'description of first blog test',
    entries: {}
  },
  '2': {
    blogId: 2,
    name: 'Super cool newsletter',
    description: 'description of super cool newsletter',
    entries: {}
  },
  '3': {
    blogId: 3,
    name: 'Third blog',
    description: 'description of third blog',
    entries: {}
  }
};



window.localStorage.setItem('blogEntries', JSON.stringify({
  '1': {
    '001': {
      text: 'lorem ipsum test blog entry',
      dateCreated: Date.now()
    }
  },
  '2': {
    '201': {
      text: 'entry 1',
      dateCreated: Date.now()
    },
    '202': {
      text: 'entry 2 - george washington',
      dateCreated: Date.now()
    }
  },
  '3': {

  }
}))


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
      //const blogEntryData = JSON.parse(window.localStorage.getItem('blogEntries'))
      //console.log('window.localStorage.blogEntries', blogEntryData)
      return state


    case actions.GET_BLOG:
      //  for now, this consists of retrieving the blog entries for the blog in question and adding them to state

      const blogEntryData = JSON.parse(window.localStorage.getItem('blogEntries'))
      const entriesForBlogId = blogEntryData[action.payload.blogId]
      
      return {
        ...state,
        [action.payload.blogId]: Object.assign({}, state[action.payload.blogId], {
          entries: entriesForBlogId
        })
      }







    default:
      return state;
  }
}
