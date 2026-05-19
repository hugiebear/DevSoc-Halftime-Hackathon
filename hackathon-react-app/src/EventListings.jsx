import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import styles from "./Styles/Events.module.css"

function EventListings() {

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
  },
  {
    id: 2,
    title: 'Finance Society Networking Evening',
    description:
      'Meet students, alumni, and industry representatives from banking, consulting, and investments.',
    location: 'UNSW Business School',
    date: 'May 28',
    time: '5:30 PM',
    organiser: 'Finance Society',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80',
    likes: 31,
    interested: 86,
    category: 'Careers',
  },
  {
    id: 3,
    title: 'Campus Food Festival',
    description:
      'Try food from different cultures, enjoy live music, and hang out with friends on campus.',
    location: 'Main Walkway',
    date: 'June 2',
    time: '12:00 PM',
    organiser: 'Arc UNSW',
    image:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80',
    likes: 76,
    interested: 203,
    category: 'Social',
  },
];

    return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <h2>UniConnect</h2>

        <nav className={styles.nav}>
          <button>Home</button>
          <button>Events</button>
          <button>Clubs</button>
          <button>Saved</button>
        </nav>
      </aside>

      <main className={styles.main}>
        <div className={styles.createPost}>
          <div className={styles.avatar}>T</div>
          <button className={styles.createButton}>What event are you looking for?</button>
        </div>

        <div className={styles.filters}>
          <button>All</button>
          <button>Technology</button>
          <button>Careers</button>
          <button>Social</button>
        </div>

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
      </main>

      <aside className={styles.rightPanel}>
        <div className={styles.panelCard}>
          <h3>Upcoming</h3>
          <p>DevSoc Hackathon Night</p>
          <p>Finance Society Networking Evening</p>
          <p>Campus Food Festival</p>
        </div>
      </aside>
    </div>
    )
}

export default EventListings