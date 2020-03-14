import React, { Component } from 'react';
import Todos from './Todos';
import Addform from './AddForm';

class App extends Component {
  state={
    todo: [
      {id: 1, content: "buy some milk"},
      {id: 2, content: "play mario kart"} 
    ]
  }
  deleteTodo=(id)=>{
    const todo= this.state.todo.filter(todo=>{
      return todo.id!==id
    }) 
    this.setState({
      todo: todo
    })
  }
  AddTodo=(todos)=>{
    todos.id=Math.random();
    let todo=[...this.state.todo, todos];
    this.setState({
      todo: todo
    })
  }
  render(){
    return (
      <div className="todo-app cotainer">
       <h1 className="center blue-text">Todo's</h1>
       <Todos todos={this.state.todo} deleteTodo={this.deleteTodo}/>
       <Addform AddTodo={this.AddTodo}/>
      </div>
    );
    }
}
  

export default App;
