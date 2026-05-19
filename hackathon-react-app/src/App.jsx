import { useState, useEffect } from 'react'
import { Routes, Route, Link, Navigate, useNavigate} from "react-router-dom"
import './App.css'
import EventListings from './EventListings'
import Login from './Pages/Login'
import Register from './Pages/Register'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

function App() {
  const [count, setCount] = useState(0)
  const [token, setToken] = useState(null);

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    setToken("test");
  }, []);

  const navigate = useNavigate();

  function fn() {
    navigate('/events')
  }

  return (
   <div>
    {token ? (
      <>
      <nav>
        <Box>
          <AppBar position='static'>
            <Toolbar sx={{ display: "flex", justifyContent: "left", gap: 5}}>
              <Link to="/events">
                View Upcoming Events
              </Link>

              <Button sx={{ ml: "auto"}} variant="contained" color="error">
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </nav>      
      </>
    ) : (
      <Box>
          <AppBar position='static'>
            <Toolbar sx={{ display: "flex", justifyContent: "left", gap: 5}}>
              <Link to="/login">Login here!</Link>
              <Link to="/register">Register here!</Link>
            </Toolbar>
          </AppBar>

      </Box>
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
