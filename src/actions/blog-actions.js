

export const ADD_BLOG_POST = 'ADD_BLOG_POST'
export const GET_BLOG = 'GET_BLOG'
export const GET_BLOGS = 'GET_BLOGS'




export function addBlogPost(id, { title, text }){

  return (dispatch, getState) => {

    dispatch({
      type: ADD_BLOG_POST,
      payload: {
        blogId: id,
        title: title,
        text: text
      }
    })
  }
}


export function getBlog(id){

  return (dispatch, getState) => {

    dispatch({
      type: GET_BLOG,
      payload: {
        blogId: id
      }
    })
  }
}

export function getBlogs(){

  return (dispatch, getState) => {

    dispatch({
      type: GET_BLOGS,
      payload: {}
    })
  }
}


export default {
  getBlogs
};