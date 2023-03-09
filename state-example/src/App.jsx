import './App.css'
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0); // I funktion useState tilldelar vi ett värde initialt
  const [name, setName] = useState('');

  console.log('Komponenten laddas om');
  // array destructuring

  function handleClick() {
    setCounter(counter + 1);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="App">
      <p id="counter">Räknare: { counter }</p>
      <button onClick={ handleClick }>Öka med 1</button>
      <input type='text' onChange={ handleChange } />
    </div>
  )
}

export default App
