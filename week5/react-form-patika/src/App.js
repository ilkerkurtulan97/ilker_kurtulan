import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList'; 

//In App js component we put everything in order. 1st Header / 2nd TodoList
function App() {

  return (
    <div className="todo-app">
        <Header />
        <TodoList />                                                                                                                             
    </div>
  );
}

export default App;
