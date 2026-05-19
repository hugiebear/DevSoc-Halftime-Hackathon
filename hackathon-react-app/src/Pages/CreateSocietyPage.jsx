import { useState, useEffect } from 'react'
import { Routes, Route, Link, Navigate, useNavigate} from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';

function CreateSocietyPage() {
    const [societyName, setSocietyName] = useState("");
    const [societyPicture, setSocietyPicture] = useState(null);
    const [societyDescription, setSocietyDescription] = useState(null);

    return (
        <>
    <Box sx={{display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center", mt: 3, gap: 2,}}> 
                

            <p>Create new Society Page:</p>
            <TextField 
                id="society-name" 
                label="Society Name" 
                variant="outlined" 
                value={societyName} 
                onChange={function (event) {setSocietyName(event.target.value); }}
                sx={{backgroundColor: "gray", borderRadius: 1, label: {colour: "white",}, input: {colour: "white",}, }}
            />

            <TextField
                id="society-description" 
                label="Describe what your society is and who is it for?" 
                variant="outlined" 
                value={societyDescription} 
                onChange={function (event) {setSocietyDescription(event.target.value); }}
                multiline
                rows={6}
                sx={{width: "500px",backgroundColor: "gray", borderRadius: 1, label: {colour: "white",}, input: {colour: "white",}, }}
            
            />

            <form>
                <span>Society Picture:</span>
                <br></br>
                <input
                    type="file"
                    name="thumbnail"
                />
            </form>

            <Button>Create Society Page</Button>
        </Box> 
        </>
    )
}

export default CreateSocietyPage