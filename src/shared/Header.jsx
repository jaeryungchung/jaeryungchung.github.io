import React, { useState, useEffect } from 'react';
import jaeryungjungImage from '../assets/logo-trans.png';

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav') && !event.target.closest('.nav-toggle')) {
        setOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="header-inner">
        <div className="header-left" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="/">
            <img src={jaeryungjungImage} alt="logo" className="logo" />
          </a>
          <a href="/" style={{ fontFamily: 'Instrument Serif', fontSize: 18, textDecoration: 'none', color: 'inherit' }}>Jaeryung Chung</a>
        </div>
        <button className="nav-toggle" onClick={handleToggleMenu} aria-label="Toggle navigation">
          ☰
        </button>
        <nav className={`nav ${open ? 'open' : ''}`}>
          <a href="#publications">Publication</a>
          <a href="#business">Business</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
