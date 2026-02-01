import React from 'react';

const ProfileCard = ({ name, role, image }) => {
    return (
        <div style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--color-border)',
            transition: 'all 0.3s ease'
        }}>
            <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: '#f3f4f6',
                margin: '0 auto 1.5rem',
                backgroundImage: image ? `url(${image})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '4px solid white',
                boxShadow: 'var(--shadow-md)'
            }}></div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: 'var(--color-primary)' }}>{name}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', fontWeight: '500', marginBottom: '1rem' }}>{role}</p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                {/* Social Icons Placeholders */}
                <span style={{ cursor: 'pointer', color: '#6b7280' }}>LinkedIn</span>
                <span style={{ cursor: 'pointer', color: '#6b7280' }}>Mail</span>
            </div>
        </div>
    );
};

export default ProfileCard;
