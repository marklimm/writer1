import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Link
} from 'react-router-dom'

import { getBlogs } from '../actions/blog-actions'

class BlogsList extends Component {
//export default () => {

  //
  //static contextTypes = {
  //    router: React.PropTypes.object
  //}

  constructor(props) {
    console.log('blogs-list constructor')
    super(props);
    this.state = {
    };


  }

  componentWillMount(){
    console.log('blogs-list componentWillMount')

    //  call to retrieve the list of blogs
    this.props.getBlogs()
  }

  componentWillReceiveProps(nextProps) {
    console.log('blogs-list componentWillReceiveProps')


  }



  renderBlogsList() {

    const blogsArr = Object.values(this.props.blog)

    if (!this.props.blog || blogsArr.length === 0) {
      return (
        <div>No items to display</div>
      )
    }


    return blogsArr.map((blog) => {

      return (

        <div key={blog.blogId} style={{marginBottom: '3vh'}}>
          <Link to={`/blog/${blog.blogId}`}>{blog.name}</Link>
          <br />
          {blog.description}

        </div>

      )
    })
  }

  render() {
    return (
      <div className="row">
        <div className="pt-2 standard-spacing">
          { this.renderBlogsList() }
        </div>

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

export default connect(mapStateToProps, { getBlogs })(BlogsList)