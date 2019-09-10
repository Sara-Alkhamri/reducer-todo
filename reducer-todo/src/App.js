import React, { useReducer } from 'react';

import { initialState, todoReducer } from './reducers/reducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const toggle = id => dispatch({type: 'TOGGLE_TODO', payload: id});
  const addTodo = item => dispatch({type: 'ADD_TODO', payload: item});
  const clearCompleted = () => dispatch({type: 'CLEAR_COMPLETED'});
  return (
    <div className="App">
      <h2>Todos-reducer</h2>
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
      <TodoList todos={state.todos} toggle={toggle} />
    </div>
  );
}

export default App;
