import React from 'react';
import Hero from '../components/home/Hero';
import Button from '../components/ui/Button';
import CollegeInfoBanner from '../components/home/CollegeInfoBanner';
import NewsTicker from '../components/ui/NewsTicker';
import ImageGallery from '../components/home/ImageGallery';
import SocialMediaBar from '../components/ui/SocialMediaBar';

const Home = () => {
    return (
        <>
            <Hero />

            {/* News Ticker */}
            <NewsTicker />

            {/* College Info Banner */}
            <CollegeInfoBanner />

            {/* About Highlights Section */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why Join IEEE SB Jain?</h2>
                        <div style={{ width: '60px', height: '4px', background: 'var(--color-accent)', margin: '0 auto' }}></div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        <FeatureCard
                            title="Networking"
                            description="Connect with industry professionals and fellow tech enthusiasts from around the globe."
                            icon="🌐"
                        />
                        <FeatureCard
                            title="Technical Growth"
                            description="Gain access to IEEE's vast library of resources, workshops, and hackathons."
                            icon="🚀"
                        />
                        <FeatureCard
                            title="Leadership"
                            description="Take on leadership roles and organize events that make a real impact."
                            icon="👥"
                        />
                    </div>
                </div>
            </section>

            {/* Image Gallery Section */}
            <ImageGallery />

            {/* Social Media Section */}
            <SocialMediaBar />

            {/* Stats/Callout Section */}
            <section style={{ backgroundColor: 'var(--color-light-bg)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Ready to start your journey?</h2>
                    <p style={{ marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                        Become a part of the world's largest technical professional organization for the advancement of technology.
                    </p>
                    <Button to="/contact">Contact Us</Button>
                </div>
            </section>
        </>
    );
};

// Simple internal component for the grid
const FeatureCard = ({ title, description, icon }) => (
    <div style={{
        padding: '2rem',
        borderRadius: '8px',
        backgroundColor: 'white',
        boxShadow: 'var(--shadow-md)',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
        cursor: 'default'
    }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{icon}</div>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{title}</h3>
        <p style={{ color: 'var(--color-text-light)' }}>{description}</p>
    </div>
);

export default Home;
