import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
// import uuid from "uuid";
import { v1 as uuid } from "uuid";
import TodoInput from './componets/TodoInput';
import TodoList from './componets/TodoList';


class App extends Component {
  state= {
    items:[],
    id: uuid(),
    item:'',
    editItem: false
  }

hanldleChange = (e) => {
  this.setState({
    item: e.target.value
  })
}

handleSubmit = (e) =>{
  e.preventDefault();

  const newItem ={
    id: this.state.id,
    title: this.state.item
  }
  
  // console.log(newItem)
  
  const updatedItems = [...this.state.items, newItem];

  this.setState({
    items: updatedItems,
    item: "",
    id: uuid(),
    editItem : false
  });
}

clearList = () => {
  this.setState({
    items: []
  })
}

handleDelete = (id) => {
  alert("Press a button!")
  const filteredItems = this.state.items.filter(item => item.id !== id)
  this.setState({
    items:filteredItems
  }) 
}

handleEdit = id =>{
  const filteredItems = this.state.items.filter(item => item.id !== id)

  const selectItem = this.state.items.find( item => item.id === id)
  console.log(selectItem)

  this.setState({
    items:filteredItems,
    item: selectItem.title,
    editItem: true,
    id: id
  }) 
}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalaliz text-center">
              Todo Input
            </h3>
            <TodoInput 
              item={this.state.item} 
              hanldleChange={this.hanldleChange} 
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    )
  }
}


export default App;
