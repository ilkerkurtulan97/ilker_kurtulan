import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import "../styling/TodoList.css"

//This component's job is to include TodoForm.js and Todo.js
function TodoList() {
  //Our state for setting todos. Initialliy we give empty array.
  const [todos, setTodos] = useState([]);

  //Adding todos to the list
  const addTodo = todo => {
    //Cheking inputted text with regex control. Taken from StackOverflow
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    //This variable responible of having our new todo in a "newTodos" variable. We use ...todos with rest operator, which is our state variable.
    const newTodos = [todo, ...todos];

    //We set the new todos with the old ones here.
    setTodos(newTodos);
  };

  //Updating todos on the list
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  //Removing todos on the list
  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  //Over here we return a TodoForm component and Todo component just in order.
  return (
    <>
      <h1 className="big-header">Start before its too late...</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;