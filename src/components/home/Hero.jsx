import React from 'react';
import Button from '../ui/Button';
import collegeHeader from '../../assets/sb-jain-header.jpg';

const Hero = () => {
    return (
        <section style={{
            position: 'relative',
            height: '90vh',
            minHeight: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '0 1rem',
            overflow: 'hidden'
        }}>
            {/* Background Image with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${collegeHeader})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0
            }}></div>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(0, 98, 155, 0.92) 0%, rgba(0, 47, 75, 0.95) 100%)',
                zIndex: 1
            }}></div>
            {/* Abstract Background Shapes */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '300px',
                height: '300px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '50%',
                filter: 'blur(50px)',
                zIndex: 2
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '5%',
                width: '200px',
                height: '200px',
                background: 'rgba(245, 166, 35, 0.1)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                zIndex: 2
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 3, maxWidth: '800px' }}>
                <h2 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: 'var(--color-accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-sans)'
                }}>SB Jain Institute of Technology, Management and Research</h2>

                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: '700',
                    marginBottom: '1.5rem',
                    color: 'white',
                    lineHeight: '1.1'
                }}>
                    IEEE Computer Society <br /> Student Branch
                </h1>

                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--color-primary-light)',
                    marginBottom: '2.5rem',
                    lineHeight: '1.6',
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Connecting students, advancing technology, and building the future leaders of the tech industry.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Button to="/events" variant="white">Explore Events</Button>
                    <Button to="/contact" variant="outline-white">Join Chapter</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
