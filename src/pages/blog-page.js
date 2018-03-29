import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Link
} from 'react-router-dom'
import moment from 'moment'

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


  renderBlogPosts(blogPosts) {

    const blogPostValues = Object.values(blogPosts)
    blogPostValues.sort((a, b) => {
      return moment(a.dateCreated).isSameOrBefore(b.dateCreated)
    })

    if (!blogPostValues || blogPostValues.length === 0) {
      return (
        <div>No blog posts yet!</div>
      )
    }

    return blogPostValues.map((blogPost) => {

      return (

        <div key={blogPost.blogPostId} style={{marginBottom: '3vh'}}>

          <h5>{blogPost.title}</h5>
          {blogPost.text}
          <br />
          <small>{moment(blogPost.dateCreated).format('MMMM Do YYYY, h:mm a')}</small>
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
          { this.renderBlogPosts(blog.blogPosts) }
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

