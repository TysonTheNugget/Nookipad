// src/components/Home.js
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Howl } from 'howler';
import harmonySound from '../assets/sounds/harmony.mp3';
import nookisImage from '../assets/memes/nookis.png'; // Import the image


const Home = () => {
  const soundRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Initialize Howl instance only once
    soundRef.current = new Howl({
      src: [harmonySound],
      loop: true,
      volume: 0.5,
      html5: true, // Ensures compatibility with larger files
      onplay: () => {
        setIsPlaying(true);
      },
      onpause: () => {
        setIsPlaying(false);
      },
      onstop: () => {
        setIsPlaying(false);
      },
      onplayerror: (id, error) => {
        console.error('Playback error:', error);
        setIsPlaying(false);
        // Attempt to unlock and play again
        soundRef.current.once('unlock', () => {
          soundRef.current.play();
        });
      },
      onloaderror: (id, error) => {
        console.error('Load error:', error);
      },
    });

    // Cleanup on unmount
    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  // Toggle sound playback
  const toggleSound = () => {
    if (soundRef.current.playing()) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
  };

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Dynamically add GIFs from public/assets/memes folder
  const gifPaths = [
    '/assets/memes/1.gif',
    '/assets/memes/2.gif',
    '/assets/memes/3.gif',
    '/assets/memes/4.gif',
    '/assets/memes/5.gif',
    '/assets/memes/6.gif',
    '/assets/memes/7.gif',
    '/assets/memes/8.gif',
    '/assets/memes/9.gif',
    '/assets/memes/10.gif',
    '/assets/memes/11.gif',
    '/assets/memes/12.gif',
    '/assets/memes/13.gif',
    '/assets/memes/14.gif',
    '/assets/memes/15.gif',
    '/assets/memes/16.gif',
    '/assets/memes/17.gif',
    '/assets/memes/18.gif',
    '/assets/memes/19.gif',
    '/assets/memes/21.gif',
    '/assets/memes/22.gif',
    '/assets/memes/23.gif',
    '/assets/memes/24.gif',
    '/assets/memes/9.png',
    '/assets/memes/20.png',
    // Add more gif paths here
  ];

 return (
    <div className="home-container">
      {/* GIF Background */}
      <div className="background-gifs">
        {gifPaths.map((gif, index) => (
          <img key={index} src={gif} alt={`background-gif-${index}`} />
        ))}
      </div>

      {/* Header Section */}
      <header className="header">
        <h1>Ordinooki</h1>
      </header>

      {/* Navigation with Dropdown Menu */}
      <nav className="nav">
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            ☰ Menu
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/about">About</Link>
              <Link to="/nooki-forest">Nooki Forest</Link>
              {/* Add more navigation links here if needed */}
            </div>
          )}
        </div>
      </nav>

      {/* Sound Toggle Button */}
      <div className="sound-controls">
        <button className="sound-toggle animate-glow" onClick={toggleSound}>
          {isPlaying ? '🔊' : '🔇'}
        </button>
      </div>

      {/* Main Content Containers */}
      <main className="main-content">
        {/* Hero Section with Background Image */}
        <section
          className="hero-section"
          style={{
            background: `url(${nookisImage}) center bottom / cover no-repeat`,
          }}
        >
          <h2>Welcome to Ordinooki</h2>
          <p>
            Embark on an epic journey into the future of blockchain gaming and immersive adventures!
          </p>
          {/* Explore Button */}
          <a
            href="https://magiceden.us/ordinals/marketplace/ordinookis"
            className="explore-button animate-glow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Now
          </a>
        </section>

        {/* Features Section */}
        <section className="features-section">
          {/* About Feature Card */}
          <div className="feature-card animate-glow">
            <img src="/assets/memes/24.gif" alt="About" />
            <h3>About</h3>
            <p>
              <Link to="/about">
                Learn more about the Ordinooki lore and the team behind the magic.
              </Link>
            </p>
          </div>

          {/* Discord Feature Card */}
          <div className="feature-card animate-glow">
            <img src="/assets/memes/23.gif" alt="Discord" />
            <h3>Discord</h3>
            <p>
              <a
                href="https://discord.com/invite/NcjVSUJT4J"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join our alpha channel and connect with fellow adventurers!
              </a>
            </p>
          </div>

          {/* Launchpad Feature Card */}
          <div className="feature-card animate-glow">
            <img src="/assets/memes/4.gif" alt="Launchpad" />
            <h3>Launchpad</h3>
            <p>Exciting features are coming soon. Stay tuned for the launch!</p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section">
          <h2>Find us on 𝕏</h2>
          <a
            href="https://twitter.com/YourTwitterHandle" // Replace with your actual Twitter handle
            className="signup-button animate-glow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Ordinooki. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
