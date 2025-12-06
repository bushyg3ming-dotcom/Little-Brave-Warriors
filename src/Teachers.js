import './App.css';
import { Link } from 'react-router-dom';

function Teachers() {
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
        <h1>Meet Our Teachers</h1>
        <div style={{maxWidth: '900px', textAlign: 'center'}}>
          <p>Our dedicated team of educators brings creativity, passion, and expertise to nurturing young minds every day! 🌟</p>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '30px'}}>
            <div style={{background: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', minWidth: '250px', textAlign: 'center'}}>
              <img src="https://picsum.photos/150/150?random=1" alt="Camy Fourie" style={{borderRadius: '50%', marginBottom: '10px', width: '100px', height: '100px', objectFit: 'cover'}} />
              <h3>Camy Fourie</h3>
              <p>Our creative director who turns every day into an art adventure! 🎨 With her magical storytelling and craft expertise, Camy inspires little imaginations to soar.</p>
            </div>
            <div style={{background: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', minWidth: '250px', textAlign: 'center'}}>
              <img src="https://picsum.photos/150/150?random=2" alt="Warren Fourie" style={{borderRadius: '50%', marginBottom: '10px', width: '100px', height: '100px', objectFit: 'cover'}} />
              <h3>Warren Fourie</h3>
              <p>The adventure master! 🏃‍♂️ Warren brings outdoor fun and physical activities that build strong bodies and brave spirits. His energy is contagious!</p>
            </div>
            <div style={{background: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', minWidth: '250px', textAlign: 'center'}}>
              <img src="https://picsum.photos/150/150?random=3" alt="Teacher Thando" style={{borderRadius: '50%', marginBottom: '10px', width: '100px', height: '100px', objectFit: 'cover'}} />
              <h3>Teacher Thando</h3>
              <p>Our music and rhythm expert! 🎵🎶 Teacher Thando fills the room with songs and dances that make learning numbers and letters unforgettable and joyful.</p>
            </div>
            <div style={{background: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', minWidth: '250px', textAlign: 'center'}}>
              <img src="https://picsum.photos/150/150?random=4" alt="Teacher Lala" style={{borderRadius: '50%', marginBottom: '10px', width: '100px', height: '100px', objectFit: 'cover'}} />
              <h3>Teacher Lala</h3>
              <p>The heart of our classroom! ❤️ Teacher Lala specializes in emotional development and kindness, teaching our brave warriors the power of friendship and empathy.</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Teachers;
