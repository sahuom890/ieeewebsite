import React from 'react';

const NewsTicker = () => {
    const news = [
        "🎉 IEEE Day Celebration 2026 - Register Now!",
        "📢 Web Development Workshop scheduled for March 10, 2026",
        "🏆 Our team won 1st prize at National Tech Symposium",
        "💡 New membership drive starting from Feb 15, 2026",
        "🔬 AI/ML Research Paper Presentation - April 5, 2026"
    ];

    return (
        <div style={{
            backgroundColor: '#f5f5f5',
            borderTop: '2px solid var(--color-accent)',
            borderBottom: '2px solid var(--color-accent)',
            padding: '1rem 0',
            overflow: 'hidden',
            position: 'relative'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
            }}>
                <div style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                    padding: '0.5rem 1.5rem',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    letterSpacing: '1px',
                    whiteSpace: 'nowrap',
                    flexShrink: 0
                }}>
                    📰 ANNOUNCEMENTS
                </div>
                <div style={{
                    overflow: 'hidden',
                    flex: 1
                }}>
                    <div style={{
                        display: 'flex',
                        gap: '3rem',
                        animation: 'scroll 30s linear infinite',
                        whiteSpace: 'nowrap'
                    }}>
                        {[...news, ...news].map((item, index) => (
                            <span
                                key={index}
                                style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--color-text)',
                                    fontWeight: '500'
                                }}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsTicker;
