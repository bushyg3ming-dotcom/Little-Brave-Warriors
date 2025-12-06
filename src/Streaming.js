import './App.css';
import { Link } from 'react-router-dom';

function Streaming() {
  return (
    <div className="App">
      <header className="App-header">
        <nav style={{position: 'absolute', top: '10px', right: '10px'}}>
          <Link to="/" style={{color: '#ff5722', textDecoration: 'none', fontSize: '1.2rem', marginRight: '10px'}}>Home</Link>
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
        <h1>Live Streaming</h1>
        <div style={{maxWidth: '1000px', textAlign: 'center'}}>
          <p>Join us for live events and activities from Little Brave Warriors Creche! 📺🎥</p>
          <div style={{marginTop: '30px', background: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
            <h2>Live Stream</h2>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
              title="Little Brave Warriors Live Stream"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{maxWidth: '100%', borderRadius: '10px'}}
            ></iframe>
            <p style={{marginTop: '10px'}}>🎬 Tune in for our exciting live sessions! Replace this embed with your actual YouTube Live URL when streaming.</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Streaming;
