import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculadora  from './pages/Calculadora'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Calculadora Científica</h1>
      <Calculadora />
    </div>
  )
}

export default App
