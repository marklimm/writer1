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

          <div className="row p-4">

            <div className=" card text-white bg-dark" style={{width: '17rem'}} >
              <img alt='' className="card-img-top" src={author.thumbnailImg} />
              <div className="card-body">
                <h5 className="card-title">{ author.name }</h5>
                <p className="card-text">{author.email}</p>

              </div>
            </div>

            <div className="col-sm-8 p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed volutpat quam, vel lobortis erat. Nulla placerat enim in lectus tristique rhoncus. Fusce id mi eget leo viverra mattis in eget velit. Donec ut nibh et erat posuere efficitur.
            </div>
          </div>



        </div>

      )
    })
  }

  render() {
    return (
      <div className="">

        <div className="">

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

