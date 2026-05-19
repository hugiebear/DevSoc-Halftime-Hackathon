import { useState, useEffect } from 'react'
import { Routes, Route, Link, Navigate, useNavigate} from "react-router-dom"
import './App.css'
import EventListings from './EventListings'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {
  const [count, setCount] = useState(0)
  const [token, setToken] = useState(null);

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    setToken(localToken);
  }, []);

  const navigate = useNavigate();

  function fn(token) {
    localStorage.setItem('token', token);
    setToken(token);
    navigate('/events')
    console.log("redirect");
  }

  return (
   <div>
    {token ? (
      <>
      <nav>
        <Link to="/events">
          View Upcoming Events
        </Link>
      </nav>      
      </>
    ) : (
      <>
        <Link to="/login">Login here!</Link>
        <Link to="/register">Register here!</Link>
      </>
    )}


    
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
