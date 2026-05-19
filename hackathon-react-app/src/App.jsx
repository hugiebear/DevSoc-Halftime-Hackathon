import { useState, useEffect } from 'react'
import { Routes, Route, Link, Navigate, useNavigate} from "react-router-dom"
import './App.css'
import EventListings from './EventListings'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate();

  function fn() {
    navigate('/events')
  }

  return (
   <div>
      <nav>
        <Link to="/events">
          View Upcoming Events
        </Link>
      </nav>

    
    <Routes>
      <Route path="/login" element={<Login successCallback={fn}/>} />
      <Route path="/register" element={<Register successCallback={fn}/>} />
      <Route
        path="/events"
        element={<EventListings/>}
      />
      
    </Routes>
   </div>
   
  )
}

export default App
