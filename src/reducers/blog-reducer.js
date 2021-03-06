import moment from 'moment'
import * as actions from '../actions/blog-actions'
import * as blogData from '../data/blog-data'

const INITIAL_STATE = blogData.getBlogsFromLocalStorage()


export default (state = INITIAL_STATE, action) => {

  if (!action || !action.type) {
    return state;
  }

  let postsForBlogId = {}
  let blog = {}

  switch (action.type) {

    case actions.ADD_BLOG_POST:
      postsForBlogId = blogData.getBlogPostsFromLocalStorage()[action.payload.blogId]

      const maxBlogPostKey = Object.keys(postsForBlogId).max()
      console.log('maxBlogPostKey', maxBlogPostKey)

      const newId = maxBlogPostKey + 1

      const updatedPostsForBlogId = Object.assign({}, postsForBlogId, {
        [newId]: {
          blogPostId: newId,
          title: action.payload.title,
          text: action.payload.text,
          dateCreated: moment().format()
        }
      })

      //  save blog posts only to local storage ... but don't bother updating redux state, since it'll be re-fetched anyway the next time the user views the list of blog posts for a blog
      blogData.saveBlogPostsToLocalStorage(action.payload.blogId, updatedPostsForBlogId)

      return state
      //return {
      //  ...state,
      //  [action.payload.blogId]: Object.assign({}, state[action.payload.blogId], {
      //    blogPosts: updatedPostsForBlogId
      //  })
      //}


    case actions.GET_BLOG:
      //  for now, this consists of retrieving the blog blogPosts for the blog in question and adding them to state

      blog = blogData.getBlogFromLocalStorage(action.payload.blogId)
      postsForBlogId = blogData.getBlogPostsFromLocalStorage()[action.payload.blogId]

      return {
        ...state,
        [action.payload.blogId]: Object.assign({}, state[action.payload.blogId], {
          blogPosts: postsForBlogId,
          name: blog.name,
          description: blog.description
        })
      }

    case actions.GET_BLOGS:
      //const blogEntryData = JSON.parse(window.localStorage.getItem('blogEntries'))
      //console.log('window.localStorage.blogEntries', blogEntryData)
      return state


    case actions.UPDATE_BLOG:

      blogData.saveBlogToLocalStorage(action.payload.blogId, action.payload)

      //  save blog only to local storage ... but don't bother updating redux state, since it'll be re-fetched anyway the next time the user views the blog
      return state

    default:
      return state;
  }
}
