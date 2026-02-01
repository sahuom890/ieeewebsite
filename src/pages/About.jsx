import React from 'react';
import headerImg from '../assets/sb-jain-header.jpg';

const About = () => {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>

            {/* Introduction Section */}
            <section style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                <div style={{ flex: '1 1 400px' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About IEEE SB Jain</h1>
                    <p style={{ marginBottom: '1rem', color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                        The IEEE Computer Society Student Branch at S.B. Jain Institute of Technology, Management and Research is a vibrant community of students dedicated to advancing technology for the benefit of humanity.
                    </p>
                    <p style={{ color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                        Established with the vision to bridge the gap between academic learning and industry standards, our chapter organizes regular workshops, technical talks, and hackathons to empower students with practical skills.
                    </p>
                </div>
                <div style={{ flex: '1 1 400px' }}>
                    <img
                        src={headerImg}
                        alt="SB Jain Institute"
                        style={{ borderRadius: '8px', boxShadow: 'var(--shadow-lg)' }}
                    />
                </div>
            </section>

            {/* Mission & Vision */}
            <section style={{ backgroundColor: 'var(--color-light-bg)', padding: '4rem 2rem', borderRadius: '16px', marginBottom: '6rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    <div>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Our Vision</h2>
                        <p style={{ color: 'var(--color-text)' }}>
                            To be a premier student organization that fosters innovation, leadership, and technical excellence among students, making them industry-ready professionals.
                        </p>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Our Mission</h2>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text)' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Provide high-quality technical education through workshops.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Create a strong network of professionals and students.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Encourage research and development activities.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* About IEEE CS Global */}
            <section style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>About IEEE Computer Society</h2>
                <p style={{ marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                    The IEEE Computer Society is the premier source for information, inspiration, and collaboration in computer science and engineering. Connecting members worldwide, the Computer Society empowers the people who advance technology by delivering tools for individuals at all stages of their professional careers.
                </p>
                <a href="https://www.computer.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'underline' }}>
                    Visit Official Website &rarr;
                </a>
            </section>

        </div>
    );
};

export default About;
