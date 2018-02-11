import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'


class NavHeader extends Component {
//export default () => {

  //
  //static contextTypes = {
  //    router: React.PropTypes.object
  //}

  constructor(props) {
    console.log('nav-header constructor')
    super(props);
    this.state = {

    };
    //this.onChange = (editorState) => this.setState({editorState});
  }

  componentWillMount(){
    console.log('nav-header componentWillMount')
    //if(this.props.authenticated){
    //
    //    //  redirect them back to the / route
    //    this.context.router.push('/dashboard')
    //}

  }

  componentWillReceiveProps(nextProps) {
    console.log('nav-header componentWillReceiveProps')


  }


  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <Link className="navbar-brand" to="/">Brand name here</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>

            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/authors">Authors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/topics">Topics</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/topics/with-extra-parameter">Topics with extra param</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/topics/and-more">Topics and more</Link>
            </li>

          </ul>
        </div>
      </nav>

    )

  }

}

export default NavHeader
