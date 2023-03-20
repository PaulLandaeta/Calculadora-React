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
      <div className="card">
        <h3>Información del desarrollador</h3>
        <p>Nombre: Paul Wilker Landaeta Flores</p>
        <p>Diplomado: FullStack</p>
        <p>Módulo: ReactJS</p>
      </div>
    </div>
  )
}

export default App
