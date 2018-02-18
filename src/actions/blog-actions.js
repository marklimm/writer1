

export const GET_BLOGS = 'GET_BLOGS'




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