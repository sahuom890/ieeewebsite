import React from 'react';
import Button from '../ui/Button';

const ImageGallery = () => {
    const galleryItems = [
        {
            id: 1,
            title: 'Tech Symposium 2025',
            description: 'Annual technical event with industry experts',
            category: 'Event'
        },
        {
            id: 2,
            title: 'Workshop Series',
            description: 'Hands-on coding workshops and training',
            category: 'Workshop'
        },
        {
            id: 3,
            title: 'Hackathon Victory',
            description: 'Our team winning the inter-college hackathon',
            category: 'Achievement'
        },
        {
            id: 4,
            title: 'Guest Lecture',
            description: 'Industry professional sharing insights',
            category: 'Seminar'
        }
    ];

    return (
        <section style={{
            padding: '5rem 0',
            backgroundColor: 'var(--color-light-bg)'
        }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Our Journey in Pictures
                    </h2>
                    <div style={{
                        width: '60px',
                        height: '4px',
                        background: 'var(--color-accent)',
                        margin: '0 auto 1rem'
                    }}></div>
                    <p style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>
                        Explore our vibrant community through moments captured at workshops, events, and achievements.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                position: 'relative',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                height: '300px',
                                backgroundColor: '#d1d5db',
                                boxShadow: 'var(--shadow-md)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.querySelector('.overlay').style.opacity = '1';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.querySelector('.overlay').style.opacity = '0';
                            }}
                        >
                            {/* Placeholder background with gradient */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: `linear-gradient(135deg, #00629B ${item.id * 10}%, #F5A623 ${100 - item.id * 10}%)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '4rem',
                                opacity: 0.3
                            }}>
                                📸
                            </div>

                            {/* Category Badge */}
                            <div style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                backgroundColor: 'var(--color-accent)',
                                color: 'white',
                                padding: '0.4rem 0.8rem',
                                borderRadius: '20px',
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                zIndex: 2
                            }}>
                                {item.category}
                            </div>

                            {/* Hover Overlay */}
                            <div
                                className="overlay"
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    padding: '2rem 1.5rem',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                    color: 'white',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease'
                                }}
                            >
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    marginBottom: '0.5rem',
                                    color: 'white'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: '#e5e7eb'
                                }}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Button to="/events">View All Events</Button>
                </div>
            </div>
        </section>
    );
};

export default ImageGallery;
