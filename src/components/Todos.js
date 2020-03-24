import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <div>
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={this.props.markComplete}
          onDeleteTodo={this.props.onDeleteTodo}
        />
      </div>
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};
export default Todos;
