import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Redirect
} from 'react-router-dom'
import { getBlog } from '../actions/blog-actions'

class BlogPageSettings extends Component {
//export default () => {

  //
  //static contextTypes = {
  //    router: React.PropTypes.object
  //}

  constructor(props) {
    super(props);

    const blog = this.props.blog[this.props.match.params.blogId]

    this.state = {
      blogId: blog.blogId,
      description: blog.description,
      name: blog.name,
      redirectBackToBlog: false
    }

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.backClicked = this.backClicked.bind(this);
  }

  componentWillMount(){

    //this.props.getBlog(this.props.match.params.blogId)
  }


  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  handleSubmit(event) {
    //console.log('new blog psot was submitted: ' + this.state.text);
    //
    //this.props.addBlogPost(this.props.match.params.blogId, this.state)
    //
    //this.setState({
    //  redirectBackToBlog: true
    //})

    event.preventDefault();
  }

  backClicked(event) {

    this.setState({
      redirectBackToBlog: true
    })

    event.preventDefault()
  }

  render() {

    //const blog = this.props.blog[this.props.match.params.blogId]

    if (this.state.redirectBackToBlog) {
      return <Redirect to={`/blog/${this.state.blogId}`} />
    }

    return (
      <div>
        <h1 className="display-5">Settings page for: {this.state.name}</h1>

        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label>Name</label>
            <input type="text"
                   value={this.state.name}
                   onChange={this.handleNameChange}
                   className="form-control"
                   placeholder="ex. The name of the blog"
                   ref={(input) => { this.txtTitleInput = input; }}
              />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input type="text"
                   value={this.state.description}
                   onChange={this.handleDescriptionChange}
                   className="form-control"
                   placeholder="ex. A description of the blog"
                   ref={(input) => { this.txtTitleInput = input; }}
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

export default connect(mapStateToProps, { getBlog })(BlogPageSettings)

