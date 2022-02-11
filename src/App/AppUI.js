import React from 'react';
import { TodoCounter } from './../TodoCounter/';
import { TodoSearch } from './../TodoSearch/';
import { TodoList } from './../TodoList/';
import { TodoItem } from './../TodoItem/';
import { CreateTodoButton } from './../CreateTodoButton/';
import { TodoContext } from './../TodoContext/'

function AppUI () {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {/* we could do it like {error, loading, ..} with Object Destructuring too */}
        {(value) => { //This value is the same as we set on TodoContext Provider value
          return (
            <TodoList>
              {value.error && <p>There was an error!</p>}
              {value.loading && <p>We are loading...</p>}
              {(!value.loading && !value.searchedTodos.length) && <p>Create your first Todo!</p>}
              {value.searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => value.completeTodo(todo.text) }
                  onDelete={() => value.deleteTodo(todo.text) }
                />
              ))}
            </TodoList>
          )
        }}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };