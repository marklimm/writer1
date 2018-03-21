import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getBlog } from '../actions/blog-actions'

class BlogPage extends Component {
//export default () => {

  //
  //static contextTypes = {
  //    router: React.PropTypes.object
  //}

  constructor(props) {
    console.log('blog constructor')
    super(props);
    this.state = {}
    //this.onChange = (editorState) => this.setState({editorState});
  }

  componentWillMount(){

    //if(this.props.authenticated){
    //
    //    //  redirect them back to the / route
    //    this.context.router.push('/dashboard')
    //}

    //this.props.getBlog(this.props.match.params.blogId)
  }

  render() {

    const blog = this.props.blog[this.props.match.params.blogId]

    return (
      <div>
        <h4>Blog Page</h4>

        <p>blogId: {this.props.match.params.blogId}</p>
        <h2>{blog.name}</h2>
        <h6>{blog.description}</h6>

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

