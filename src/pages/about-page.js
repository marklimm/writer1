import React, { Component } from 'react';
//import { connect } from 'react-redux'



class AboutPage extends Component {
//export default () => {

    //
    //static contextTypes = {
    //    router: React.PropTypes.object
    //}

    constructor(props) {
        console.log('about constructor')
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

    }

    render() {
        return (
            <div>
                <h4>About Page</h4>

                <p>some stuff here ... multiple blogs, each having blog entries</p>

                <div className="card" style={{width: '18rem'}} >
                    <img alt='' className="card-img-top" src="http://via.placeholder.com/350x300" />
                    <div className="card-body">
                        <h5 className="card-title">John Doe</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="https://www.twitter.com" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>


            </div>
        )

    }

}




//function mapStateToProps(state){
//    //return { authenticated: state.auth.authenticated}
//    return {}
//}

//export default connect(mapStateToProps)(AboutPageView)

export default AboutPage

