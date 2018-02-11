import axios from 'axios'

export const RECEIVED_AUTHORS = 'RECEIVED_AUTHORS'


const randomUserApi = 'https://randomuser.me/api/'

export function getAuthors(){

  return (dispatch, getState) => {

    console.log('randomUserApi called')

    axios
      .get(`${randomUserApi}?results=5`, {
        responseType: 'json'
      })
      .then(function (response) {

        let authors = []

        const authorResults = response.data.results

        authorResults.map((author) => {
          authors.push({
            id: author.id.value,
            name: author.name.first + ' ' + author.name.last,
            email: author.email
          })
        })
        //const rPostsLength = response.data.data.children.length
        //for(let i = 0; i < rPostsLength; i++){
        //  let post = response.data.data.children[i].data
        //
        //  rPosts.push({
        //    author: post.author,
        //    created_utc: post.created_utc,
        //    created_local: moment(moment.unix(post.created_utc)).local().format('LLL'),
        //    id: post.id,
        //    permalink: `${redditHostName}${post.permalink}`,
        //    selftext: post.selftext,
        //    title: post.title,
        //    url: post.url
        //  })
        //}


        dispatch(receivedAuthors(authors))
      })
      .catch(function (error) {
        console.log(error);
      });


  }
}


const receivedAuthors = (authors) => {
  return {
    type: RECEIVED_AUTHORS,
    payload: {
      authors: authors
    }
  }
}

export default {
  getAuthors
};