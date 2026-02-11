
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Formulario from './components/Formulario'
import { Clock } from './components/Clock'
import { Tareas } from './components/Tareas'

function App() {
 
  return (
    <>
      <nav>
        <Link to="/formulario">Formulario </Link>  
        <Link to="/reloj">Cuenta Atrás </Link>
        <Link to="/tareas">Tareas</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/formulario' element={<Formulario />} />
          <Route path='/reloj' element={<Clock />} />
          <Route path='/tareas' element={<Tareas />} />
        </Routes>
      </main>
    </>
  )
}

export default App
