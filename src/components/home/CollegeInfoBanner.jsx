import React from 'react';

const CollegeInfoBanner = () => {
    const stats = [
        { icon: '👥', label: 'Active Members', value: '150+' },
        { icon: '🎓', label: 'Years Active', value: '8+' },
        { icon: '🎯', label: 'Events Conducted', value: '50+' },
        { icon: '🏆', label: 'Awards Won', value: '12+' }
    ];

    return (
        <section style={{
            background: 'linear-gradient(135deg, #00629B 0%, #004f7c 100%)',
            padding: '3rem 0',
            color: 'white'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem',
                    textAlign: 'center'
                }}>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            style={{
                                padding: '1.5rem',
                                transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                                {stat.icon}
                            </div>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: '700',
                                marginBottom: '0.25rem',
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--color-accent)'
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                fontSize: '0.95rem',
                                opacity: 0.9,
                                fontWeight: '500'
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollegeInfoBanner;
