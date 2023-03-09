import './App.css'
import { useState } from 'react'

import TodoItem from './components/TodoItem/TodoItem'
import AddTodo from './components/AddTodo/AddTodo'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, todoText: 'Köp kaffe', done: false },
    { id: 2, todoText: 'Köp kaka', done: false },
    { id: 3, todoText: 'Brygg kaffe', done: false },
    { id: 4, todoText: 'Drick kaffe', done: false },
    { id: 5, todoText: 'Koda React', done: false }
  ]);

  const todoComponents = todos.map((todo) => {
    return <TodoItem todo={ todo.todoText } done={ todo.done } key={ todo.id } />
  });

  // Denna funktion används för att manipulera våran todos-array ovan
  function addNewTodo(todoFromInput) {
    console.log(`Todo text from inputfield: ${todoFromInput}`);

    const newTodo = {
      id: todos.length + 1,
      todoText: todoFromInput,
      done: false
    }

    const tempTodosArray = [...todos];
    tempTodosArray.push(newTodo);

    setTodos(tempTodosArray);
  }

  return (
    <div className="App">
      <ul className='todos'>
        { todoComponents }
      </ul>
      <AddTodo addNewTodo={ addNewTodo } />
    </div>
  )
}

export default App
