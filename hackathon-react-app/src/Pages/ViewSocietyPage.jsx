import { useState, useEffect } from 'react'
import { Routes, Route, Link, Navigate, useNavigate} from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import styles from "../Styles/Events.module.css"

function ViewSocietyPage() {
    const [eventName, setEvenmtName] = useState("");
    const [eventDescription, setEventDescription] = useState(null);    
    const [eventTime, setEventTime] = useState("");
    const [eventDate, setEventDate] = useState("");
    const navigate = useNavigate();
    const createEvent = () => {
        navigate('/events');
    }

    const sampleEvents = [
    {
        id: 1,
        title: 'DevSoc Hackathon Night',
        description:
        'Join other students for a night of coding, teamwork, food, and prizes. Beginners are welcome.',
        location: 'UNSW Roundhouse',
        date: 'May 25',
        time: '6:00 PM',
        organiser: 'DevSoc',
        image:
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80',
        likes: 42,
        interested: 128,
        category: 'Technology',
    }
    ]
    return (
        <>
            <Box  sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5}}>
                <div>
                    <p>Software Development Society</p> <p>Followers: 67</p>
                    {sampleEvents.map((event) => (
                            <article key={event.id} className={styles.card}>
                                <div className={styles.cardHeader}>
                                <div className={styles.clubAvatar}>
                                    {event.organiser.charAt(0)}
                                </div>

                                <div>
                                    <h3>{event.organiser}</h3>
                                    <p>
                                    {event.date} at {event.time}
                                    </p>
                                </div>
                                </div>

                                <div className={styles.category}>{event.category}</div>

                                <h2>{event.title}</h2>

                                <p className={styles.description}>{event.description}</p>

                                <p className={styles.location}>📍 {event.location}</p>

                                <img
                                className={styles.image}
                                src={event.image}
                                alt={event.title}
                                />

                                <div className={styles.stats}>
                                <span>{event.likes} likes</span>
                                <span>{event.interested} interested</span>
                                </div>

                                <div className={styles.actions}>
                                <button>👍 Like</button>
                                <button>⭐ Interested</button>
                                <button>↗ Share</button>
                                </div>
                            </article>
                            ))}

                </div>
            </Box>

        </>
    
    )
}

export default ViewSocietyPage