import { useState } from 'react';
import { AppUI } from './AppUI';
// import './App.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LALALALAA', completed: false },
// ];

function App() {
  const localStorageTodo = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodo) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodo);
  }

  const [todos, setTodos ] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter((item) => !!item.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >=1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));

    setTodos(newTodos);
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = !todos[todoIndex].completed;

    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  }

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;