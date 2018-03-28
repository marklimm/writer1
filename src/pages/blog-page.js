import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Link
} from 'react-router-dom'

import { getBlog } from '../actions/blog-actions'

class BlogPage extends Component {
//export default () => {

  //
  //static contextTypes = {
  //    router: React.PropTypes.object
  //}

  constructor(props) {
    //console.log('blog constructor')
    super(props);
    this.state = {}
    //this.onChange = (editorState) => this.setState({editorState});
  }

  componentWillMount(){
    console.log('blog componentWillMount')
    //if(this.props.authenticated){
    //
    //    //  redirect them back to the / route
    //    this.context.router.push('/dashboard')
    //}

    this.props.getBlog(this.props.match.params.blogId)
  }


  renderBlogEntries(blogEntries) {

    const entryKeys = Object.keys(blogEntries)

    if (!blogEntries || entryKeys.length === 0) {
      return (
        <div>No blog posts yet!</div>
      )
    }


    return entryKeys.map((entryKey) => {

      const blogEntry = blogEntries[entryKey]

      return (

        <div key={entryKey} style={{marginBottom: '3vh'}}>

          <h5>{blogEntry.title}</h5>
          {blogEntry.text}
          <br />
          <small>{blogEntry.dateCreated}</small>
        </div>

      )
    })
  }


  render() {

    const blog = this.props.blog[this.props.match.params.blogId]

    return (
      <div>
        <h1 className="display-4">{blog.name}</h1>
        <p className="lead"><em>{blog.description}</em></p>

        <div className="">
          { this.renderBlogEntries(blog.entries) }
        </div>

        <Link to={`/blog/${blog.blogId}/new`}>Create new post</Link>

      </div>
    )

  }

}





function mapStateToProps(state){
  //return { authenticated: state.auth.authenticated}
  return {
    blog: state.blog
  }
}

export default connect(mapStateToProps, { getBlog })(BlogPage)

