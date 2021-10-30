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
  
  console.log(newItem)
  
  const updatedItems = [...this.state.items, newItem];

  this.setState({
    items: updatedItems,
    item: "",
    id: uuid(),
    editItem : false
  });


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
              handleSubmit={this.handleSubmit}/>
            <TodoList items={this.state.items}/>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
