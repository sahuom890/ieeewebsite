import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import sbjainLogo from '../../assets/sb-jain-logo.jpg';
import ieeeLogo from '../../assets/ieee-logo.jpg';

const Navbar = () => {
    const linkStyle = ({ isActive }) => ({
        color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
        fontWeight: isActive ? 600 : 500,
        marginRight: '2rem'
    });

    return (
        <header style={{
            boxShadow: 'var(--shadow-sm)',
            position: 'sticky',
            top: 0,
            backgroundColor: 'white',
            zIndex: 1000,
            padding: '0.5rem 0'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src={sbjainLogo} alt="SB Jain Logo" style={{ height: '50px' }} />
                    <div style={{ borderLeft: '1px solid #ccc', height: '40px', margin: '0 0.5rem' }}></div>
                    <img src={ieeeLogo} alt="IEEE Logo" style={{ height: '40px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1.1rem' }}>IEEE CS</span>
                        <span style={{ fontSize: '0.8rem', color: '#666' }}>SB Jain Institute</span>
                    </div>
                </Link>
                <nav style={{ display: 'flex', alignItems: 'center' }}>
                    <NavLink to="/" style={linkStyle}>Home</NavLink>
                    <NavLink to="/about" style={linkStyle}>About</NavLink>
                    <NavLink to="/events" style={linkStyle}>Events</NavLink>
                    <NavLink to="/team" style={linkStyle}>Team</NavLink>
                    <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Join Now</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
