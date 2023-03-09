import './App.css'
import { useState } from 'react'

import Form from './components/Form/Form'
import ShowSum from './components/ShowSum/ShowSum'

function App() {
  // I och med att vi vill visa summan i ShowSum - komponenten behöver vi ha ett state
  // i App då det är den närmaste komponenten som importerar båda Form och ShowSum.
  const [friendSum, setFriendSum] = useState(0);

  return (
    <div className="App">
      <Form updateFriendSum={ setFriendSum } /> { /* Skicka ner funktion för att uppdatera friendSum */ }
      <ShowSum sum={ friendSum } /> { /* Skicka ner summan för varje person till ShowSum */}
    </div>
  )
}

export default App
