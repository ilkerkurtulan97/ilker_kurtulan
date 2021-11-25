import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList'; 

function App() {

  return (
    <div className="todo-app">
        <Header />
        <TodoList />                                                                                                                             
    </div>
  );
}

export default App;
