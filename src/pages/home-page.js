import React, { Component } from 'react';
//import { connect } from 'react-redux'



import BlogsList from '../components/blogs-list'
import ItemsList from '../components/items-list'

class HomePage extends Component {
//export default () => {

    //
    //static contextTypes = {
    //    router: React.PropTypes.object
    //}

    constructor(props) {
        console.log('home-page constructor')
        super(props);
        this.state = {
            //editorState: EditorState.createEmpty(),
            descriptionInput: '',
            nameInput: '',

        };
        //this.onChange = (editorState) => this.setState({editorState});

        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        console.log('home-page componentWillMount')
        //if(this.props.authenticated){
        //
        //    //  redirect them back to the / route
        //    this.context.router.push('/dashboard')
        //}

    }

    componentWillReceiveProps(nextProps) {
        console.log('home-page componentWillReceiveProps')



        //this.setState({
        //    items: nextProps.items
        //})

    }

    render() {
        return (

            <div>
              <div className="row">
                home page stuff
              </div>

              <BlogsList />
              <ItemsList />
            </div>

        )

    }

}



//
//function mapStateToProps(state){
//    //return { authenticated: state.auth.authenticated}
//    return {
//        items: state.item
//    }
//}
//
//export default connect(mapStateToProps, { addItem, getItems })(HomePage)
export default HomePage
