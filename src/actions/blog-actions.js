

export const GET_BLOGS = 'GET_BLOGS'
export const GET_BLOG = 'GET_BLOG'




export function getBlogs(){

  return (dispatch, getState) => {

    dispatch({
      type: GET_BLOGS,
      payload: {}
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


export default {
  getBlogs
};