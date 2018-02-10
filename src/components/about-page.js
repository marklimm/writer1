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
                <h4>This is the about page!!!</h4>

                <p>some stuff here ... multiple blogs, each having blog entries</p>
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

