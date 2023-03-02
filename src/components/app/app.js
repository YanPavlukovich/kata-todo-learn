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
    todoData: [this.createTodoItem('Drink Coffee'), this.createTodoItem('Build React App'), this.createTodoItem('Have a lunch')],
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: uuidv4(),
    };
  }

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
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newTodoData = [...todoData, newItem];

      return {
        todoData: newTodoData,
      };
    });
  };

  toggleProperty(array, id, propertyName) {
    const idx = array.findIndex((item) => item.id === id);
    const oldItem = array[idx];
    const newItem = { ...oldItem, [propertyName]: !oldItem[propertyName] };

    return [...array.slice(0, idx), newItem, ...array.slice(idx + 1)];
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, 'important') };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, 'done') };
    });
  };

  render() {
    const { todoData } = this.state;

    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="todo-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={todoData} onDeleted={this.deleteItem} onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone} />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
