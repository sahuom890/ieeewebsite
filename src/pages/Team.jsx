import React from 'react';
import ProfileCard from '../components/ui/ProfileCard';

const Team = () => {
    // Dummy Data
    const faculty = [
        { id: 1, name: "Dr. A. B. Smith", role: "Branch Counselor" },
        { id: 2, name: "Prof. X. Y. Z", role: "Faculty Advisor" },
    ];

    const excecom = [
        { id: 3, name: "Student Name 1", role: "Chairperson" },
        { id: 4, name: "Student Name 2", role: "Vice-Chairperson" },
        { id: 5, name: "Student Name 3", role: "Secretary" },
        { id: 6, name: "Student Name 4", role: "Treasurer" },
        { id: 7, name: "Student Name 5", role: "Web Master" },
        { id: 8, name: "Student Name 6", role: "Event Lead" },
    ];

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Meet the Team</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-light)' }}>
                    The dedicated individuals behind IEEE SB Jain working to create a vibrant technical community.
                </p>
            </div>

            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: '1.8rem', color: '#4b5563' }}>Faculty Advisors</h2>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap'
                }}>
                    {faculty.map(member => <ProfileCard key={member.id} {...member} />)}
                </div>
            </section>

            <section>
                <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: '1.8rem', color: '#4b5563' }}>Executive Committee</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {excecom.map(member => <ProfileCard key={member.id} {...member} />)}
                </div>
            </section>
        </div>
    );
};

export default Team;
