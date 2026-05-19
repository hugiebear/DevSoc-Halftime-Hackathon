import { useState, useEffect } from 'react'
import { Routes, Route, Link, Navigate, useNavigate} from "react-router-dom"
import './App.css'
import EventListings from './EventListings'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <nav>
        <Link to="/events">
          View Upcoming Events
        </Link>
      </nav>

    
    <Routes>
      <Route
        path="/events"
        element={<EventListings/>}
      />
    </Routes>
   </div>
   
  )
}

export default App
