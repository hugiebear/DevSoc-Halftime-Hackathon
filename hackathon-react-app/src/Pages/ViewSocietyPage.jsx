import { useState, useEffect } from 'react'
import { Routes, Route, Link, Navigate, useNavigate} from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';

function ViewSocietyPage() {
    const [eventName, setEvenmtName] = useState("");
    const [eventDescription, setEventDescription] = useState(null);    
    const [eventTime, setEventTime] = useState("");
    const [eventDate, setEventDate] = useState("");
    const navigate = useNavigate();
    const createEvent = () => {
        navigate('/events');
    }
    return (
        <>
            <Box  sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5}}>
                <div>
                    Event

                </div>
            </Box>

        </>
    
    )
}

export default ViewSocietyPage