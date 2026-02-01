import React, { useState } from 'react';
import Button from '../components/ui/Button';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setStatus('sent');
            e.target.reset();
        }, 1500);
    };

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get in Touch</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-light)' }}>
                    Have questions about joining, events, or collaborations? We'd love to hear from you.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                {/* Contact Info */}
                <div style={{ backgroundColor: 'var(--color-primary)', padding: '2.5rem', borderRadius: '12px', color: 'white' }}>
                    <h2 style={{ color: 'white', marginBottom: '2rem' }}>Contact Information</h2>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>Address</h3>
                        <p style={{ lineHeight: '1.6' }}>
                            S.B. Jain Institute of Technology, Management and Research<br />
                            Behind Asaram Bapu Ashram, Gram - Yerla,<br />
                            Katol Road, Nagpur - 441501
                        </p>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>Email</h3>
                        <p>contact@ieeesbjain.in</p>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>Socials</h3>
                        <p>Follow us on Instagram, LinkedIn, and Twitter</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                            <input
                                type="text"
                                required
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', outline: 'none' }}
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                            <input
                                type="email"
                                required
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', outline: 'none' }}
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                            <textarea
                                rows="5"
                                required
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', outline: 'none', resize: 'vertical' }}
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        <Button type="submit" style={{ width: '100%' }} disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
                        </Button>
                    </form>
                </div>

            </div>

            {/* Map and Office Hours Section */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '3rem',
                marginTop: '4rem'
            }}>
                {/* Google Map Embed */}
                <div>
                    <h2 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>Find Us</h2>
                    <div style={{
                        width: '100%',
                        height: '350px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-md)'
                    }}>
                        <iframe
                            title="SB Jain Institute Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0934739467516!2d79.0894!3d21.1184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c72b77c6cfaf%3A0x3e4f89f18a9d7a37!2sS.B.%20Jain%20Institute%20of%20Technology%2C%20Management%20and%20Research!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Office Hours */}
                <div>
                    <h2 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>IEEE Chapter Office Hours</h2>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '12px',
                        boxShadow: 'var(--shadow-md)',
                        border: '2px solid var(--color-accent)'
                    }}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{
                                fontSize: '1.1rem',
                                marginBottom: '0.75rem',
                                color: 'var(--color-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                🕒 Weekdays
                            </h3>
                            <p style={{ color: 'var(--color-text)', paddingLeft: '1.75rem' }}>
                                Monday - Friday: 10:00 AM - 5:00 PM
                            </p>
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{
                                fontSize: '1.1rem',
                                marginBottom: '0.75rem',
                                color: 'var(--color-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                📍 Location
                            </h3>
                            <p style={{ color: 'var(--color-text)', paddingLeft: '1.75rem' }}>
                                Room 301, Computer Science Block
                            </p>
                        </div>
                        <div>
                            <h3 style={{
                                fontSize: '1.1rem',
                                marginBottom: '0.75rem',
                                color: 'var(--color-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                🌐 Website
                            </h3>
                            <a
                                href="https://www.sbjit.edu.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: 'var(--color-accent)',
                                    textDecoration: 'underline',
                                    paddingLeft: '1.75rem'
                                }}
                            >
                                www.sbjit.edu.in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
