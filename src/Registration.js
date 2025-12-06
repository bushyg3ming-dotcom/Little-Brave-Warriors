import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Registration() {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    address: '',
    emergencyContact: '',
    medicalInfo: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Registration submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="App">
        <header className="App-header">
          <nav style={{position: 'absolute', top: '10px', right: '10px'}}>
            <Link to="/" style={{color: '#ff5722', textDecoration: 'none', fontSize: '1.2rem'}}>Home</Link>
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
          <h1>Registration Submitted!</h1>
          <p>Thank you for registering your child. We will contact you soon.</p>
          <Link to="/">
            <button style={{backgroundColor: '#ff5722', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer'}}>Back to Home</button>
          </Link>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav style={{position: 'absolute', top: '10px', right: '10px'}}>
          <Link to="/" style={{color: '#ff5722', textDecoration: 'none', fontSize: '1.2rem'}}>Home</Link>
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
        <h1>Child Registration</h1>
        <form onSubmit={handleSubmit} style={{maxWidth: '600px', margin: '0 auto', textAlign: 'left'}}>
          <div style={{marginBottom: '15px'}}>
            <label style={{display: 'block', marginBottom: '5px'}}>Child's Name:</label>
            <input
              type="text"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
              required
              style={{width: '100%', padding: '8px', fontSize: '1rem'}}
            />
          </div>
          <div style={{marginBottom: '15px'}}>
            <label style={{display: 'block', marginBottom: '5px'}}>Child's Age:</label>
            <input
              type="number"
              name="childAge"
              value={formData.childAge}
              onChange={handleChange}
              required
              min="2"
              max="5"
              style={{width: '100%', padding: '8px', fontSize: '1rem'}}
            />
          </div>
          <div style={{marginBottom: '15px'}}>
            <label style={{display: 'block', marginBottom: '5px'}}>Parent/Guardian Name:</label>
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              required
              style={{width: '100%', padding: '8px', fontSize: '1rem'}}
            />
          </div>
          <div style={{marginBottom: '15px'}}>
            <label style={{display: 'block', marginBottom: '5px'}}>Parent/Guardian Email:</label>
            <input
              type="email"
              name="parentEmail"
              value={formData.parentEmail}
              onChange={handleChange}
              required
              style={{width: '100%', padding: '8px', fontSize: '1rem'}}
            />
          </div>
          <div style={{marginBottom: '15px'}}>
            <label style={{display: 'block', marginBottom: '5px'}}>Parent/Guardian Phone:</label>
            <input
              type="tel"
              name="parentPhone"
              value={formData.parentPhone}
              onChange={handleChange}
              required
              style={{width: '100%', padding: '8px', fontSize: '1rem'}}
            />
          </div>
          <div style={{marginBottom: '15px'}}>
            <label style={{display: 'block', marginBottom: '5px'}}>Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="3"
              style={{width: '100%', padding: '8px', fontSize: '1rem'}}
            />
          </div>
          <div style={{marginBottom: '15px'}}>
            <label style={{display: 'block', marginBottom: '5px'}}>Emergency Contact:</label>
            <input
              type="text"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleChange}
              required
              style={{width: '100%', padding: '8px', fontSize: '1rem'}}
            />
          </div>
          <div style={{marginBottom: '15px'}}>
            <label style={{display: 'block', marginBottom: '5px'}}>Medical Information/Allergies:</label>
            <textarea
              name="medicalInfo"
              value={formData.medicalInfo}
              onChange={handleChange}
              rows="3"
              style={{width: '100%', padding: '8px', fontSize: '1rem'}}
            />
          </div>
          <button type="submit" style={{backgroundColor: '#ff5722', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer'}}>Submit Registration</button>
        </form>
      </header>
    </div>
  );
}

export default Registration;
