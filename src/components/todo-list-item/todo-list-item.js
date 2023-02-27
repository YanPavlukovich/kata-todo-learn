import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  render() {
    const { label, important = false } = this.props;
    const myStyle = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal',
    };
    return (
      <span className="todo-list-item">
        <span className="todo-list-item-label" style={myStyle}>
          {label}
        </span>
        <button id="margin" type="button" className="btn btn-outline-success btn-sm">
          <i className="bi bi-exclamation-square" />
        </button>

        <button type="button" className="btn btn-outline-danger btn-sm ">
          <i className="bi bi-trash" />
        </button>
      </span>
    );
  }
}
