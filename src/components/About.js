// src/components/About.js
import React from 'react';
import '../App.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="header">
        <h1>About Ordinooki</h1>
      </header>
      <main className="about-content">
        <p>
          Ordinooki is a pioneering platform at the intersection of blockchain gaming and immersive virtual experiences. Our mission is to create engaging and secure environments where players can explore, interact, and thrive.
        </p>
        {/* Add more content as needed */}
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Ordinooki. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
