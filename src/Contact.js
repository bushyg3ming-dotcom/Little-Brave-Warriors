import './App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teacher: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', teacher: '', message: '' });
  };

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
        <h1>Contact Our Teachers</h1>
        <div style={{maxWidth: '600px', textAlign: 'center'}}>
          <p>Have questions for our teachers? Send us a message and we'll get back to you! 📝💌</p>
          <form onSubmit={handleSubmit} style={{background: 'rgba(255, 255, 255, 0.9)', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginTop: '20px'}}>
            <div style={{marginBottom: '15px', textAlign: 'left'}}>
              <label htmlFor="name" style={{display: 'block', marginBottom: '5px', fontWeight: 'bold'}}>Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem'}}
              />
            </div>
            <div style={{marginBottom: '15px', textAlign: 'left'}}>
              <label htmlFor="email" style={{display: 'block', marginBottom: '5px', fontWeight: 'bold'}}>Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem'}}
              />
            </div>
            <div style={{marginBottom: '15px', textAlign: 'left'}}>
              <label htmlFor="teacher" style={{display: 'block', marginBottom: '5px', fontWeight: 'bold'}}>Select Teacher:</label>
              <select
                id="teacher"
                name="teacher"
                value={formData.teacher}
                onChange={handleChange}
                required
                style={{width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem'}}
              >
                <option value="">Choose a teacher</option>
                <option value="camy">Camy Fourie</option>
                <option value="warren">Warren Fourie</option>
                <option value="thando">Teacher Thando</option>
                <option value="lala">Teacher Lala</option>
              </select>
            </div>
            <div style={{marginBottom: '15px', textAlign: 'left'}}>
              <label htmlFor="message" style={{display: 'block', marginBottom: '5px', fontWeight: 'bold'}}>Your Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem', resize: 'vertical'}}
                placeholder="Ask your question here..."
              ></textarea>
            </div>
            <button type="submit" style={{background: '#ff5722', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer'}}>Send Message</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Contact;
