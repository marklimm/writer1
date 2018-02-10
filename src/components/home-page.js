import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addItem, getItems } from '../actions/item-actions'

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

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        console.log('home-page componentWillMount')
        //if(this.props.authenticated){
        //
        //    //  redirect them back to the / route
        //    this.context.router.push('/dashboard')
        //}

        //  call to retrieve the list of items
        this.props.getItems()
    }

    componentWillReceiveProps(nextProps) {
        console.log('home-page componentWillReceiveProps')



        //this.setState({
        //    items: nextProps.items
        //})

    }


    handleNameChange(event) {
        this.setState(...this.state, {
            nameInput: event.target.value
        });
    }

    handleDescriptionChange(event) {
        this.setState(...this.state, {
            descriptionInput: event.target.value
        });
    }

    handleSubmit(event) {
        console.log(this.state.nameInput)

        this.props.addItem(this.state.nameInput, this.state.descriptionInput, 20)

        this.setState(...this.state, {
            descriptionInput: '',
            nameInput: ''
        })

        event.preventDefault()
    }


    renderItemList() {


        const itemsArr = Object.values(this.props.items.list)

        if (!this.props.items.list || itemsArr.length === 0) {
            return (
                <div>No items to display</div>
            )
        }


        return itemsArr.map((item) => {

            return (

                <div key={item.itemId} style={{marginBottom: '3vh'}}>

                    <dt>
                        <strong>{item.name}</strong>
                    </dt>
                    <dd>
                        {item.description}
                    </dd>

                </div>

            )
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="pt-2 people-list">
                    { this.renderItemList() }
                </div>

                Name:
                    <input type="text"
                           value={this.state.nameInput}
                           onChange={this.handleNameChange.bind(this)}

                        />

                    <br />
                    Description:
                <input type="text"
                       value={this.state.descriptionInput}
                       onChange={this.handleDescriptionChange.bind(this)}

                    />

                <input type="submit" value="Click me" />
                {/*<button type="button" onClick={this.buttonClicked.bind(this)}>Click me</button>*/}
            </form>
        )

    }

}




function mapStateToProps(state){
    //return { authenticated: state.auth.authenticated}
    return {
        items: state.item
    }
}

export default connect(mapStateToProps, { addItem, getItems })(HomePage)

