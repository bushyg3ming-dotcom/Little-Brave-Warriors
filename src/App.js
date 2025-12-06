import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Announcements from './Announcements';
import Events from './Events';
import Teachers from './Teachers';
import Streaming from './Streaming';
import Contact from './Contact';
import Activities from './Activities';
import Registration from './Registration';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: '#ff5722',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '8px',
            cursor: 'pointer',
            fontSize: '1.2rem',
            zIndex: 1000
          }}
        >
          ☰
        </button>
        <nav style={{
          position: 'absolute',
          top: '60px',
          right: '10px',
          display: menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          gap: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          zIndex: 999
        }}>
          <Link to="/announcements" onClick={() => setMenuOpen(false)}>
            <button style={{backgroundColor: '#ff5722', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer', width: '100%'}}>Announcements</button>
          </Link>
          <Link to="/events" onClick={() => setMenuOpen(false)}>
            <button style={{backgroundColor: '#ff5722', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer', width: '100%'}}>Events</button>
          </Link>
          <Link to="/teachers" onClick={() => setMenuOpen(false)}>
            <button style={{backgroundColor: '#ff5722', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer', width: '100%'}}>Teachers</button>
          </Link>
          <Link to="/streaming" onClick={() => setMenuOpen(false)}>
            <button style={{backgroundColor: '#ff5722', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer', width: '100%'}}>Streaming</button>
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <button style={{backgroundColor: '#ff5722', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer', width: '100%'}}>Contact</button>
          </Link>
          <Link to="/activities" onClick={() => setMenuOpen(false)}>
            <button style={{backgroundColor: '#ff5722', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer', width: '100%'}}>Activities</button>
          </Link>
          <Link to="/registration" onClick={() => setMenuOpen(false)}>
            <button style={{backgroundColor: '#ff5722', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer', width: '100%'}}>Registration</button>
          </Link>
        </nav>
        {/* Desktop Navigation */}
        <nav style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          right: '60px',
          display: 'flex',
          justifyContent: 'space-around',
          '@media (max-width: 768px)': { display: 'none' }
        }}>
          <Link to="/announcements">
            <button style={{backgroundColor: '#ff5722', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer'}}>Announcements</button>
          </Link>
          <Link to="/events">
            <button style={{backgroundColor: '#ff5722', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer'}}>Events</button>
          </Link>
          <Link to="/teachers">
            <button style={{backgroundColor: '#ff5722', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer'}}>Teachers</button>
          </Link>
          <Link to="/streaming">
            <button style={{backgroundColor: '#ff5722', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer'}}>Streaming</button>
          </Link>
          <Link to="/contact">
            <button style={{backgroundColor: '#ff5722', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer'}}>Contact</button>
          </Link>
          <Link to="/activities">
            <button style={{backgroundColor: '#ff5722', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer'}}>Activities</button>
          </Link>
          <Link to="/registration">
            <button style={{backgroundColor: '#ff5722', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer'}}>Registration</button>
          </Link>
        </nav>
        <div className="background-emojis">
          <span style={{position: 'absolute', top: '10%', left: '15%', fontSize: '4rem', opacity: 0.2}}>🖍️</span>
          <span style={{position: 'absolute', top: '30%', right: '20%', fontSize: '3rem', opacity: 0.2}}>⚽</span>
          <span style={{position: 'absolute', top: '50%', left: '50%', fontSize: '2rem', opacity: 0.2}}>📖</span>
          <span style={{position: 'absolute', top: '70%', left: '10%', fontSize: '3.5rem', opacity: 0.2}}>🏀</span>
          <span style={{position: 'absolute', top: '20%', right: '10%', fontSize: '2.5rem', opacity: 0.2}}>🧸</span>
          <span style={{position: 'absolute', top: '60%', right: '30%', fontSize: '4rem', opacity: 0.2}}>🐻</span>
          <span style={{position: 'absolute', top: '40%', left: '70%', fontSize: '3rem', opacity: 0.2}}>A</span>
          <span style={{position: 'absolute', top: '80%', left: '80%', fontSize: '2rem', opacity: 0.2}}>B</span>
          <span style={{position: 'absolute', top: '15%', left: '40%', fontSize: '3.5rem', opacity: 0.2}}>C</span>
          <span style={{position: 'absolute', top: '55%', left: '5%', fontSize: '2.5rem', opacity: 0.2}}>1</span>
          <span style={{position: 'absolute', top: '35%', right: '5%', fontSize: '3rem', opacity: 0.2}}>2</span>
          <span style={{position: 'absolute', top: '75%', left: '30%', fontSize: '4rem', opacity: 0.2}}>3</span>
        </div>
        <img src="/rocking horse.jpg" alt="Rocking Horse" width="120" height="120" />
        <h1>Welcome to Little Brave Warriors Creche</h1>
        <p>
          Nurturing young minds in a safe, fun, and educational environment.
        </p>
        <p>
          We provide quality childcare services for children aged 2-5 years.
        </p>
      </header>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/announcements" element={<Announcements />} />
      <Route path="/events" element={<Events />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/streaming" element={<Streaming />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

export default App;
