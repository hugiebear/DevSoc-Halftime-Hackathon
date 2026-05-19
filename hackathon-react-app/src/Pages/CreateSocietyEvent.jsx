import { useState, useEffect } from 'react'
import { Routes, Route, Link, Navigate, useNavigate} from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';

function CreateSocietyEvent() {
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
         <Box sx={{display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center", mt: 3, gap: 2,}}>


            <p>Create a new event for your society!:</p>
            <TextField 
                id="event-name" 
                label="Event Name" 
                variant="outlined" 
                value={eventName} 
                onChange={function (event) {setEventName(event.target.value); }}
                sx={{backgroundColor: "gray", borderRadius: 1, label: {colour: "white",}, input: {colour: "white",}, }}
            />

            <TextField
                id="event-description" 
                label="Describe what will be happening" 
                variant="outlined" 
                value={eventDescription} 
                onChange={function (event) {setEventDescription(event.target.value); }}
                multiline
                rows={6}
                sx={{width: "500px",backgroundColor: "gray", borderRadius: 1, label: {colour: "white",}, input: {colour: "white",}, }}
            
            />      

            <Button onClick={createEvent}>Create Event</Button>   
        </Box>
        </>
    )

}

export default CreateSocietyEvent