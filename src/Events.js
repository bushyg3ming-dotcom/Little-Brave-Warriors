import './App.css';
import { Link } from 'react-router-dom';

function Events() {
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
        <h1>Events</h1>
        <div style={{maxWidth: '800px', textAlign: 'center'}}>
          <h2>🎉 Amazing Fundraiser Day! 🎉</h2>
          <p>
            What an absolutely spectacular day at our Little Brave Warriors Fundraiser! 🌟 It was filled with laughter, joy, and incredible community spirit that made everyone's hearts soar! 💖
          </p>
          <p>
            Our little warriors dazzled everyone with their enthusiastic performances, creative crafts, and delicious homemade treats. 🎨🍪 The games were a blast – from the bouncy castle adventures 🏰 to the treasure hunts that had everyone giggling! 😂
          </p>
          <p>
            Parents, teachers, and community members came together in a celebration of fun and generosity. 🎈 We raised funds for new playground equipment and educational resources that will make learning even more exciting! 📚✨
          </p>
          <p>
            The highlight? Watching our brave warriors shine with confidence and kindness! 🏆❤️ Thank you to everyone who made this day so magical – we can't wait for the next adventure! 🚀
          </p>
          <p style={{fontSize: '2rem'}}>
            🎪 🎨 🎈 🎭 🏆 🎊 🎁 🎸 🎺 🎷
          </p>
        </div>
      </header>
    </div>
  );
}

export default Events;
