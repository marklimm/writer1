/**
 * Created by mark on 3/28/2018.
 */




const initLocalStorage = () => {

  window.localStorage.setItem('blogs', JSON.stringify({
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
  }))

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






export const getBlogsFromLocalStorage = () => {

  if (!window.localStorage.getItem('blogs')) {
    //  "initialize/seed the database" if there's no data yet
    initLocalStorage()
  }

  return JSON.parse(window.localStorage.getItem('blogs'))
}


export const getBlogPostsFromLocalStorage = () => {
  return JSON.parse(window.localStorage.getItem('blogEntries'))
}

export const saveBlogPostsToLocalStorage = (blogId, updatedPostsForBlogId) => {

  const blogPostsFromLocalStorage = getBlogPostsFromLocalStorage()

  const updatedBlogEntries = {
    ...blogPostsFromLocalStorage,
    [blogId]: updatedPostsForBlogId
  }

  localStorage.setItem('blogEntries', JSON.stringify(updatedBlogEntries))
}


