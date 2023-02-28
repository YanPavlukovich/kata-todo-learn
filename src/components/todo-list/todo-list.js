import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item.js';
import './todo-list.css';

const TodoList = ({ todos, onDeleted }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    /* Когда в jsx имена свойств компонента совпадают с именами свойств объекта
        (label/item.label,important/item.important) => {...item} взять каждое свойство из объекта item и передать его в
        качестве атрибута вместе со значением в TodoListItem */
    return (
      // eslint-disable-next-line react/jsx-key
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps} onDeleted={() => onDeleted(id)} />
      </li>
    );
  });
  return <ul className="list-group todo-list">{elements}</ul>;
};
export default TodoList;
