import React from 'react';
import Button from './Button';

const EventCard = ({ title, date, location, description, image }) => {
    return (
        <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
        >
            <div style={{
                height: '200px',
                backgroundColor: '#e5e7eb',
                backgroundImage: image ? `url(${image})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9ca3af'
            }}>
                {!image && <span>No Image Available</span>}
                <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: 'var(--color-primary)',
                    boxShadow: 'var(--shadow-sm)'
                }}>
                    {date}
                </div>
            </div>

            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>{title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: '1rem' }}>
                    📍 {location}
                </p>
                <p style={{ fontSize: '0.95rem', color: '#4b5563', marginBottom: '1.5rem', flexGrow: 1 }}>
                    {description}
                </p>
                <Button to={`/events`} variant="outline" style={{ width: '100%' }}>View Details</Button>
            </div>
        </div>
    );
};

export default EventCard;
