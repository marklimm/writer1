import React, { Component } from 'react';
//import { connect } from 'react-redux'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'



const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

class TopicsPage extends Component {
//export default () => {

    //
    //static contextTypes = {
    //    router: React.PropTypes.object
    //}

    constructor(props) {
        console.log('topics page constructor')
        super(props);
        this.state = {
            match: props.match
        }
        //this.onChange = (editorState) => this.setState({editorState});
    }

    componentWillMount(){

        //if(this.props.authenticated){
        //
        //    //  redirect them back to the / route
        //    this.context.router.push('/dashboard')
        //}

    }

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')

        this.setState({
            match: this.props.match
        })
    }

    //${match.url}
    render() {

        const match = this.state.match

        return (
            <div>
                <h4>This is the topics page!!!</h4>

                <Switch>
                    <Route path={`${match.url}/:topicId/:param2`} component={Topic}/>
                    <Route path={`${match.url}/:topicId/`} component={Topic}/>
                    <Route path={match.url} render={() => (
                        <h3>Please select a topic.</h3>
                    )}/>
                </Switch>

            </div>
        )

    }

}


export default TopicsPage

