import React from 'react';
import { TodoContext } from './../TodoContext/';
import './TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(previous => !previous);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(previous => !previous);
  }

  const onTextChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Write your new TODO</label>
      <textarea 
        onChange={onTextChange}
        placeholder='insert text of the new task'
        value={newTodoValue}
      />
      <div className="TodoForm-buttonContainer">
        <button 
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}>
          Cancel
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Add
        </button>
      </div>
    </form>
  )
}

export { TodoForm };