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

        this.txtNameInput.focus()
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
            <div className="row">
                <div className=" col-md-6 col-xl-4">
                    <div className="pt-2 people-list">
                        { this.renderItemList() }
                    </div>
                </div>
                <div className=" col-md-6 col-xl-4">

                    <form onSubmit={this.handleSubmit}>

                        <div className="form-group">
                            <label >Name</label>
                            <input type="text"
                                   value={this.state.nameInput}
                                   onChange={this.handleNameChange.bind(this)}
                                   className="form-control"
                                   placeholder="ex. beanie cap"
                                   ref={(input) => { this.txtNameInput = input; }}
                                />
                        </div>

                        <div className="form-group">
                            <label >Description</label>
                            <input type="text"
                                   value={this.state.descriptionInput}
                                   onChange={this.handleDescriptionChange.bind(this)}
                                   className="form-control"
                                   placeholder="ex. keeps my head warm"
                                />
                            {/*<textarea
                                className="form-control"
                                rows="3"
                                value={this.state.descriptionInput}
                                onChange={this.handleDescriptionChange.bind(this)}
                                placeholder="ex. keeps my head warm">
                            </textarea>*/}
                        </div>



                        <input type="submit" className="btn btn-outline-primary" value="Click me" />
                        {/*<button type="button" onClick={this.buttonClicked.bind(this)}>Click me</button>*/}
                    </form>
                </div>
            </div>
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

