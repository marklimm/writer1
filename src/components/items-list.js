import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addItem, getItems } from '../actions/item-actions'

class ItemsList extends Component {
//export default () => {

  //
  //static contextTypes = {
  //    router: React.PropTypes.object
  //}

  constructor(props) {
    console.log('items-list constructor')
    super(props);
    this.state = {
      descriptionInput: '',
      nameInput: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
  }

  componentWillMount(){
    console.log('items-list componentWillMount')

    //  call to retrieve the list of items
    this.props.getItems()
  }

  componentWillReceiveProps(nextProps) {
    console.log('items-list componentWillReceiveProps')



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

      //style={{marginBottom: '3vh'}}
      return (

        <div key={item.itemId} className='list-group-item'>

          <h4>{item.name}</h4>
          <p>{item.description}</p>

        </div>

      )
    })
  }

  render() {
    return (
      <div className="row">
        <div className=" col-md-6 col-xl-4">
          <div className="pt-2 standard-spacing list-group">
            { this.renderItemList() }
          </div>
        </div>
        <div className=" col-md-6 col-xl-4">

          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label >Name</label>
              <input type="text"
                     value={this.state.nameInput}
                     onChange={this.handleNameChange}
                     className="form-control"
                     placeholder="ex. beanie cap"
                     ref={(input) => { this.txtNameInput = input; }}
                />
            </div>

            <div className="form-group">
              <label >Description</label>
              <input type="text"
                     value={this.state.descriptionInput}
                     onChange={this.handleDescriptionChange}
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


            <input type="submit" className="btn btn-outline-primary" value="Add Item" />
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

export default connect(mapStateToProps, { addItem, getItems })(ItemsList)

