import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Finish React JS tutorial",
        completed: false
      },
      {
        id: 2,
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
  render() {
    return (
      <div>
        <Header></Header>
        <Todos
          key="0"
          todos={this.state.todos}
          markComplete={this.markComplete}
          onDeleteTodo={this.onDeleteTodo}
        />
      </div>
    );
  }
}

export default App;
