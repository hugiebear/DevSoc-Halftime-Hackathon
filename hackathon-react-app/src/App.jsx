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
import CreateSocietyPage from './Pages/CreateSocietyPage'

function App() {
  const [count, setCount] = useState(0)
  const [token, setToken] = useState(null);
  const [societyCreated, setSocietyCreated] = useState(false);


  useEffect(() => {
    const localToken = localStorage.getItem('token');
    setToken("test");
  }, []);

  const navigate = useNavigate();

  function fn(token) {
    localStorage.setItem('token', token);
    setToken(token);
    navigate('/events')
    console.log("redirect");
  }

  const confirmLogout = () => {
    setToken(null);
    navigate('/login');
  }

  return (
   <div>
    {token ? (
      <>
      <nav>
        <Box>
          <AppBar position='static'>
            <Toolbar sx={{ display: "flex", justifyContent: "left", gap: 5}}>
              <Link to="/events">View Upcoming Events</Link>
              <Link to="/createsocietypage">Create a page for your society!</Link>

              <Button sx={{ ml: "auto"}} variant="contained" color="error" onClick={confirmLogout}>
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

    {
      societyCreated && (
        <Box>
          <AppBar position='static'>
            <Toolbar sx={{ display: "flex", justifyContent: "left", gap: 5}}>
              <Link to="/login">Create an event for your society!</Link>
            </Toolbar>
          </AppBar>
          
        </Box>
      )
    }


    
    <Routes>
      <Route path="/login" element={<Login successCallback={fn}/>} />
      <Route path="/register" element={<Register successCallback={fn}/>} />
      <Route
        path="/events"
        element={<EventListings/>}
      />
      <Route path="/createsocietypage" element={<CreateSocietyPage setSocietyCreated={setSocietyCreated}/>}/>
      
    </Routes>
   </div>
   
  )
}

export default App
