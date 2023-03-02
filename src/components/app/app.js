import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppHeader from '../app-header/app-header.js';
import SearchPanel from '../search-panel/search-panel.js';
import TodoList from '../todo-list/todo-list.js';
import ItemStatusFilter from '../item-status-filter/item-status-filter.js';
import ItemAddForm from '../item-add-form/item-add-form.js';

import './app.css';

export default class App extends Component {
  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Build React App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((item) => item.id === id);

      const newTodoData = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newTodoData,
      };
    });
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: uuidv4(),
    };

    this.setState(({ todoData }) => {
      const newTodoData = [...todoData, newItem];

      return {
        todoData: newTodoData,
      };
    });
  };

  onToggleImportant = (id) => {
    console.log('Toggle important', id);
  };

  onToggleDone = (id) => {
    console.log('Toggle done', id);
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="todo-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone} />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
