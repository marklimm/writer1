import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Redirect
} from 'react-router-dom'
import { addBlogPost, getBlog } from '../actions/blog-actions'

class BlogPageNewPost extends Component {
//export default () => {

  //
  //static contextTypes = {
  //    router: React.PropTypes.object
  //}

  constructor(props) {
    super(props);
    this.state = {
      redirectBackToBlog: false,
      text: '',
      title: ''
    }

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.backClicked = this.backClicked.bind(this);
  }

  componentWillMount(){

    //this.props.getBlog(this.props.match.params.blogId)
  }


  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleTextChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    console.log('new blog psot was submitted: ' + this.state.text);

    this.props.addBlogPost(this.props.match.params.blogId, this.state)

    this.setState({
      redirectBackToBlog: true
    })

    event.preventDefault();
  }


  backClicked(event) {

    this.setState({
      redirectBackToBlog: true
    })

    event.preventDefault()
  }

  render() {

    const blog = this.props.blog[this.props.match.params.blogId]

    if (this.state.redirectBackToBlog) {
      return <Redirect to={`/blog/${blog.blogId}`} />
    }

    return (
      <div>
        <h1 className="display-5">Create new blog post for: {blog.name}</h1>

        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label>Title</label>
            <input type="text"
                   value={this.state.title}
                   onChange={this.handleTitleChange}
                   className="form-control"
                   placeholder="ex. Blog Post Title"
                   ref={(input) => { this.txtTitleInput = input; }}
              />
          </div>

          <div className="form-group">
            <textarea
              value={this.state.text}
              onChange={this.handleTextChange}
              rows='10'
              cols='90'
              placeholder="New blog post here..."
              />
          </div>


          <button
            type="submit"
            className="btn btn-outline-primary ">Submit</button>
          <button
            type="button"
            className="btn btn-outline-secondary float-right"
            onClick={this.backClicked}>Back</button>

        </form>
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

export default connect(mapStateToProps, { addBlogPost, getBlog })(BlogPageNewPost)

