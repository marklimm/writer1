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
    name: 'Riker rants',
    description: 'The title says it all',
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
      dateCreated: new Date().toDateString()
    }
  },
  '2': {
    '201': {
      title: 'Riker Rants 1',
      text: 'Our neural pathways have become accustomed to your sensory input patterns. Computer, belay that order. The game’s not big enough unless it scares you a little. ',
      dateCreated: new Date().toDateString()
    },
    '202': {
      title: 'Riker Rants 2',
      text: 'When has justice ever been as simple as a rule book? What’s a knock-out like you doing in a computer-generated gin joint like this? Did you come here for something in particular or just general Riker-bashing?',
      dateCreated: new Date().toDateString()
    },
    '203': {
      title: 'Riker Rants 3',
      text: 'Wouldn’t that bring about chaos? In all trust, there is the possibility for betrayal. I’ll be sure to note that in my log. The unexpected is our normal routine. ',
      dateCreated: new Date().toDateString()
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
