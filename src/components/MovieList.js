import React, { useState } from 'react';
import MovieForm from './MovieForm';
import Movie from './Movie';

function MovieList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <MovieForm onSubmit={addTodo} />
      <Movie
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default MovieList;