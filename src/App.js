import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Finish React JS tutorial",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Finish React Native tutorial",
        completed: false
      }
    ]
  };
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(x => {
        if (x.id === id) {
          x.completed = !x.completed;
        }
        return x;
      })
    });
  };
  onDeleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(x => x.id !== id)]
    });
  };
  addTodo = title => {
    let newId = uuidv4();
    const newTodo = {
      id: newId,
      title,
      completed: false
    };
    console.log(newId);
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <Header></Header>
          <AddTodo addTodo={this.addTodo}></AddTodo>
          <Todos
            key="0"
            todos={this.state.todos}
            markComplete={this.markComplete}
            onDeleteTodo={this.onDeleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
