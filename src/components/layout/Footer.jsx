import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f3f4f6', padding: '3rem 0', marginTop: 'auto' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                <div>
                    <h3 style={{ marginBottom: '1rem' }}>IEEE SB Jain</h3>
                    <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Advancing Technology for Humanity. Creating a community of innovators and leaders.
                    </p>

                    {/* Quick Stats */}
                    <div style={{
                        display: 'flex',
                        gap: '1.5rem',
                        marginTop: '1.5rem',
                        flexWrap: 'wrap'
                    }}>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-primary)' }}>150+</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>Members</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-primary)' }}>50+</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>Events</div>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                        {['💼', '📷', '🐦', '📘'].map((icon, idx) => (
                            <a
                                key={idx}
                                href="#"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    backgroundColor: '#e5e7eb',
                                    fontSize: '1.2rem',
                                    transition: 'all 0.2s ease',
                                    textDecoration: 'none'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#e5e7eb';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--color-text)' }}>Quick Links</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-text-light)' }}>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/team">Our Team</Link></li>
                        <li><Link to="/about">About IEEE</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--color-text)' }}>Contact</h4>
                    <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                        SB Jain Institute of Technology, Management and Research<br />
                        Nagpur, Maharashtra<br />
                        Email: contact@ieeesbjain.in<br />
                        <a
                            href="https://www.sbjit.edu.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--color-primary)',
                                textDecoration: 'underline',
                                display: 'inline-block',
                                marginTop: '0.5rem'
                            }}
                        >
                            🌐 Visit College Website
                        </a>
                    </p>
                </div>
            </div>
            <div className="container" style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb', textAlign: 'center', fontSize: '0.8rem', color: '#9ca3af' }}>
                © {new Date().getFullYear()} IEEE CS Student Branch, SB Jain Institute. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
