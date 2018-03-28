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
}

const resetLocalStorage = () => {

  window.localStorage.setItem('blogEntries', JSON.stringify({
    '1': {
      '1': {
        title: 'Generic test title',
        text: 'lorem ipsum test blog entry',
        dateCreated: new Date().toDateString()
      }
    },
    '2': {
      '1': {
        title: 'Riker Rants 1',
        text: 'Our neural pathways have become accustomed to your sensory input patterns. Computer, belay that order. The game’s not big enough unless it scares you a little. ',
        dateCreated: new Date().toDateString()
      },
      '2': {
        title: 'Riker Rants 2',
        text: 'When has justice ever been as simple as a rule book? What’s a knock-out like you doing in a computer-generated gin joint like this? Did you come here for something in particular or just general Riker-bashing?',
        dateCreated: new Date().toDateString()
      },
      '3': {
        title: 'Riker Rants 3',
        text: 'Wouldn’t that bring about chaos? In all trust, there is the possibility for betrayal. I’ll be sure to note that in my log. The unexpected is our normal routine. ',
        dateCreated: new Date().toDateString()
      }
    },
    '3': {

    }
  }))
}

//resetLocalStorage()

const getBlogPostsFromLocalStorage = () => {
  return JSON.parse(window.localStorage.getItem('blogEntries'))
}

const saveBlogPostsToLocalStorage = (blogId, updatedPostsForBlogId) => {

  const blogPostsFromLocalStorage = getBlogPostsFromLocalStorage()

  const updatedBlogEntries = {
    ...blogPostsFromLocalStorage,
    [blogId]: updatedPostsForBlogId
  }

  localStorage.setItem('blogEntries', JSON.stringify(updatedBlogEntries))
}

export default (state = INITIAL_STATE, action) => {

  if (!action || !action.type) {
    return state;
  }

  let postsForBlogId = {}

  switch (action.type) {

    case actions.ADD_BLOG_POST:
      postsForBlogId = getBlogPostsFromLocalStorage()[action.payload.blogId]

      const maxBlogPostKey = Object.keys(postsForBlogId).max()
      console.log('maxBlogPostKey', maxBlogPostKey)

      const newId = maxBlogPostKey + 1

      const updatedPostsForBlogId = Object.assign({}, postsForBlogId, {
        [newId]: {
          title: action.payload.title,
          text: action.payload.text,
          dateCreated: new Date().toDateString()
        }
      })

      //  save blog posts only to local storage ... but don't bother updating redux state, since it'll be re-fetched anyway the next time the user views the list of blog posts for a blog
      saveBlogPostsToLocalStorage(action.payload.blogId, updatedPostsForBlogId)

      return state
      //return {
      //  ...state,
      //  [action.payload.blogId]: Object.assign({}, state[action.payload.blogId], {
      //    entries: updatedPostsForBlogId
      //  })
      //}


    case actions.GET_BLOG:
      //  for now, this consists of retrieving the blog entries for the blog in question and adding them to state

      postsForBlogId = getBlogPostsFromLocalStorage()[action.payload.blogId]

      return {
        ...state,
        [action.payload.blogId]: Object.assign({}, state[action.payload.blogId], {
          entries: postsForBlogId
        })
      }

    case actions.GET_BLOGS:
      //const blogEntryData = JSON.parse(window.localStorage.getItem('blogEntries'))
      //console.log('window.localStorage.blogEntries', blogEntryData)
      return state

    default:
      return state;
  }
}
