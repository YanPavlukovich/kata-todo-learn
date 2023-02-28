import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
  render() {
    return (
      <div className="item-add-form">
        <button
          type="submit"
          className="btn btn-outline-secondary"
          onClick={() => this.props.onItemAdded('Добавить новый Task')}
        >
          Add Item
        </button>
      </div>
    );
  }
}
