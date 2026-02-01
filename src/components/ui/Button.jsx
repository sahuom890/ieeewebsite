import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, variant = 'primary', style, ...props }) => {
    const baseStyle = {
        padding: '0.8rem 1.6rem',
        borderRadius: '4px',
        fontWeight: '600',
        fontSize: '1rem',
        fontFamily: 'var(--font-heading)',
        cursor: 'pointer',
        border: 'none',
        transition: 'all 0.3s ease',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        ...style
    };

    const variants = {
        primary: {
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            border: '2px solid var(--color-primary)',
        },
        outline: {
            backgroundColor: 'transparent',
            color: 'var(--color-primary)',
            border: '2px solid var(--color-primary)',
        },
        white: {
            backgroundColor: 'white',
            color: 'var(--color-primary)',
            border: '2px solid white',
        },
        'outline-white': {
            backgroundColor: 'transparent',
            color: 'white',
            border: '2px solid white',
        }
    };

    const finalStyle = { ...baseStyle, ...variants[variant] };

    if (to) {
        return (
            <Link to={to} style={finalStyle} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button style={finalStyle} {...props}>
            {children}
        </button>
    );
};

export default Button;
