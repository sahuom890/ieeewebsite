import React from 'react';
import EventCard from '../components/ui/EventCard';

const Events = () => {
    const events = [
        {
            id: 1,
            title: "Tech Symposium 2026",
            date: "Feb 15, 2026",
            location: "SB Jain Auditorium",
            description: "A day filled with technical talks, workshops, and networking opportunities."
        },
        {
            id: 2,
            title: "Web Development Bootcamp",
            date: "March 10, 2026",
            location: "Computer Lab 1",
            description: "Learn React, Node.js, and modern web technologies in this hands-on workshop."
        },
        {
            id: 3,
            title: "AI & ML Seminar",
            date: "April 05, 2026",
            location: "Online (Zoom)",
            description: "Expert session on the future of Artificial Intelligence and its applications."
        }
    ];

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Events</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-light)' }}>
                    Stay updated with the latest workshops, seminars, and technical competitions organized by IEEE SB Jain.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '2rem'
            }}>
                {events.map(event => (
                    <EventCard key={event.id} {...event} />
                ))}
            </div>
        </div>
    );
};

export default Events;
