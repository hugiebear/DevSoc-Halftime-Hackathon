import { useState, useEffect } from 'react'
import { Routes, Route, Link, Navigate, useNavigate} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    Test
      <div>
        <Link to="/events">
          View Upcomming Events
        </Link>
      </div>
   </div>
  )
}

export default App
