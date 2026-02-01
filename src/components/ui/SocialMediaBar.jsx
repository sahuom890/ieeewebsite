import React from 'react';

const SocialMediaBar = () => {
    const socialLinks = [
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼', color: '#0077B5' },
        { name: 'Instagram', url: 'https://instagram.com', icon: '📷', color: '#E4405F' },
        { name: 'Twitter', url: 'https://twitter.com', icon: '🐦', color: '#1DA1F2' },
        { name: 'Facebook', url: 'https://facebook.com', icon: '📘', color: '#1877F2' },
        { name: 'YouTube', url: 'https://youtube.com', icon: '📹', color: '#FF0000' }
    ];

    return (
        <div style={{
            backgroundColor: 'white',
            padding: '2rem 0',
            textAlign: 'center'
        }}>
            <div className="container">
                <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '1.5rem',
                    color: 'var(--color-primary)'
                }}>
                    Connect With Us
                </h3>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    flexWrap: 'wrap'
                }}>
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                backgroundColor: '#f3f4f6',
                                fontSize: '1.8rem',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = social.color;
                                e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#f3f4f6';
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <span>{social.icon}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialMediaBar;
