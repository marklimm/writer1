import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getAuthors } from '../actions/author-actions'

class AuthorPage extends Component {

  constructor(props) {
    console.log('author-page constructor')
    super(props);
    this.state = {

    };

    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    console.log('author-page componentWillMount')

    this.props.getAuthors()
  }

  renderAuthors() {

    if (!this.props.authors || this.props.authors.length === 0) {
      return (
        <div>No authors to display</div>
      )
    }

    return this.props.authors.map((author) => {

      return (

        <div key={author.id + author.name} style={{marginBottom: '3vh'}}>

          <h5>{ author.name}</h5>
          {author.email}

        </div>

      )
    })
  }

  render() {
    return (
      <div className="row">

        <div className=" col-md-6 col-xl-4">

          { this.renderAuthors() }
        </div>
      </div>
    )

  }

}




function mapStateToProps(state){
  //return { authenticated: state.auth.authenticated}
  return {
    authors: state.author.list
  }
}

export default connect(mapStateToProps, { getAuthors })(AuthorPage)

