/**
 * Created by mark on 3/28/2018.
 */
import moment from 'moment'



const initLocalStorage = () => {

  window.localStorage.setItem('blogs', JSON.stringify({
    '1': {
      blogId: 1,
      blogPosts: {},
      dateCreated: moment().format(),
      description: 'description of first blog test',
      name: 'First Blog Test',
    },
    '2': {
      blogId: 2,
      blogPosts: {},
      dateCreated: moment().format(),
      description: 'The title says it all',
      name: 'Riker rants'
    },
    '3': {
      blogId: 3,
      blogPosts: {},
      dateCreated: moment().format(),
      description: 'description of third blog',
      name: 'Third blog'
    }
  }))


  window.localStorage.setItem('blogPosts', JSON.stringify({
    '1': {
      '1': {
        blogPostId: 1,
        title: 'Generic test title',
        text: 'lorem ipsum test blog entry',
        dateCreated: moment().format()
      }
    },
    '2': {
      '1': {
        blogPostId: 1,
        title: 'Riker Rants 1',
        text: 'Our neural pathways have become accustomed to your sensory input patterns. Computer, belay that order. The game\'s not big enough unless it scares you a little. ',
        dateCreated: moment().format()
      },
      '2': {
        blogPostId: 2,
        title: 'Riker Rants 2',
        text: 'When has justice ever been as simple as a rule book? What\'s a knock-out like you doing in a computer-generated gin joint like this? Did you come here for something in particular or just general Riker-bashing?',
        dateCreated: moment().format()
      },
      '3': {
        blogPostId: 3,
        title: 'Riker Rants 3',
        text: 'Wouldn\'t that bring about chaos? In all trust, there is the possibility for betrayal. I\'ll be sure to note that in my log. The unexpected is our normal routine. ',
        dateCreated: moment().format()
      }
    },
    '3': {

    }
  }))
}

const wipeLocalStorage = () => {
  window.localStorage.removeItem('blogs')
  window.localStorage.removeItem('blogPosts')
}
//wipeLocalStorage()



export const getBlogsFromLocalStorage = () => {

  if (!window.localStorage.getItem('blogs')) {
    //  "initialize/seed the database" if there's no data yet
    initLocalStorage()
  }

  return JSON.parse(window.localStorage.getItem('blogs'))
}

export const getBlogFromLocalStorage = (blogId) => {

  return getBlogsFromLocalStorage()[blogId]
}


export const getBlogPostsFromLocalStorage = () => {
  return JSON.parse(window.localStorage.getItem('blogPosts'))
}

export const saveBlogPostsToLocalStorage = (blogId, updatedPostsForBlogId) => {

  const blogPostsFromLocalStorage = getBlogPostsFromLocalStorage()

  const updatedBlogPosts = {
    ...blogPostsFromLocalStorage,
    [blogId]: updatedPostsForBlogId
  }

  localStorage.setItem('blogPosts', JSON.stringify(updatedBlogPosts))
}


export const saveBlogToLocalStorage = (blogId, { name, description }) => {
  const blogsFromLocalStorage = getBlogsFromLocalStorage()
  const blogFromLocalStorage = blogsFromLocalStorage[blogId]

  const updatedBlog = {
    ...blogFromLocalStorage,
    name: name,
    description: description
  }

  const updatedBlogs = {
    ...blogsFromLocalStorage,
    [blogId]: updatedBlog
  }

  localStorage.setItem('blogs', JSON.stringify(updatedBlogs))
}
