import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import { useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import './App.css'
import EventListings from './EventListings'
import CreateSocietyPage from './Pages/CreateSocietyPage'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Register from './Pages/Register'
import CreateSocietyEvent from './Pages/CreateSocietyEvent'
import ViewSocietyPage from './Pages/ViewSocietyPage'

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
                                <Toolbar sx={{ display: "flex", justifyContent: "left", gap: 5 }}>
                                    <Link to="/events">View Upcoming Events</Link>
                                    <Link to="/createsocietypage">Create a page for your society!</Link>
                                      {societyCreated && (
                                        <>
                                          <Link to="/createsocietyevent">Create an event for your society!</Link>
                                          <Link to="/viewsocietypage">View your society's page</Link>
                                        </>
                                        
                                      )}
                                    <Link to="/profile/:id">View Profile</Link>
                                    <Button sx={{ ml: "auto" }} variant="contained" color="error" onClick={confirmLogout}>
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
                        <Toolbar sx={{ display: "flex", justifyContent: "left", gap: 5 }}>
                            <Link to="/login">Login here!</Link>
                            <Link to="/register">Register here!</Link>
                        </Toolbar>
                    </AppBar>

                </Box>
            )}

    {

    }

            <Routes>
                <Route path="/login" element={<Login successCallback={fn} />} />
                <Route path="/register" element={<Register successCallback={fn} />} />
                <Route
                    path="/events"
                    element={<EventListings />}
                />
                <Route path="/createsocietypage" element={<CreateSocietyPage setSocietyCreated={setSocietyCreated}/>}/>
                <Route path="/createsocietyevent" element={<CreateSocietyEvent/>}/>
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/viewsocietypage" element={<ViewSocietyPage/>}/>

            </Routes>
        </div>

    )
}

export default App
