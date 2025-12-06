import './App.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Activities() {
  const [mathAnswer, setMathAnswer] = useState('');
  const [mathResult, setMathResult] = useState('');
  const [currentProblem, setCurrentProblem] = useState({ num1: 3, num2: 4, answer: 7 });
  const [animalGuess, setAnimalGuess] = useState('');
  const [animalResult, setAnimalResult] = useState('');
  const [currentAnimal, setCurrentAnimal] = useState({ emoji: '🐶', name: 'dog' });

  const animals = [
    { emoji: '🐶', name: 'dog' },
    { emoji: '🐱', name: 'cat' },
    { emoji: '🐭', name: 'mouse' },
    { emoji: '🐹', name: 'hamster' },
    { emoji: '🐰', name: 'rabbit' },
    { emoji: '🦊', name: 'fox' },
    { emoji: '🐻', name: 'bear' },
    { emoji: '🐼', name: 'panda' },
    { emoji: '🐨', name: 'koala' },
    { emoji: '🐯', name: 'tiger' },
    { emoji: '🦁', name: 'lion' },
    { emoji: '🐸', name: 'frog' },
    { emoji: '🐵', name: 'monkey' },
    { emoji: '🐧', name: 'penguin' },
    { emoji: '🐦', name: 'bird' },
    { emoji: '🐺', name: 'wolf' }
  ];

  const generateNewAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    setCurrentAnimal(animals[randomIndex]);
    setAnimalGuess('');
    setAnimalResult('');
  };

  const generateNewProblem = () => {
    const num1 = Math.floor(Math.random() * 5) + 1; // 1-5
    const num2 = Math.floor(Math.random() * 5) + 1; // 1-5
    const answer = num1 + num2;
    setCurrentProblem({ num1, num2, answer });
    setMathAnswer('');
    setMathResult('');
  };

  useEffect(() => {
    generateNewProblem();
  }, []);

  const checkMath = () => {
    if (parseInt(mathAnswer) === currentProblem.answer) {
      setMathResult(`🎉 Correct! ${currentProblem.num1} + ${currentProblem.num2} = ${currentProblem.answer}`);
      setTimeout(() => {
        generateNewProblem();
      }, 2000);
    } else {
      setMathResult('❌ Try again! Hint: Count on your fingers!');
    }
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
        <h1>Fun Activities for Kids</h1>

        <div style={{maxWidth: '1000px', display: 'flex', flexDirection: 'column', gap: '30px'}}>

          {/* Math Section */}
          <div style={{background: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
            <h2>🧮 Math Time!</h2>
            <p>Let's do some simple addition!</p>
            <p style={{fontSize: '2rem'}}>{currentProblem.num1} + {currentProblem.num2} = ?</p>
            <input
              type="number"
              value={mathAnswer}
              onChange={(e) => setMathAnswer(e.target.value)}
              style={{padding: '8px', fontSize: '1rem', marginRight: '10px'}}
              placeholder="Your answer"
            />
            <button onClick={checkMath} style={{background: '#ff5722', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Check Answer</button>
            <p style={{marginTop: '10px', fontWeight: 'bold'}}>{mathResult}</p>
          </div>

          {/* Reading Section */}
          <div style={{background: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
            <h2>📖 Reading Time!</h2>
            <div style={{textAlign: 'left', maxWidth: '600px', margin: '0 auto'}}>
              <h3>The Brave Little Rabbit</h3>
              <p>Once upon a time, there was a little rabbit named Hoppy. Hoppy was very brave! One day, he saw a big, scary wolf in the forest.</p>
              <p>"Don't be afraid!" said Hoppy. "I will hop away!" And he did! Hop, hop, hop! He hopped all the way home to his family.</p>
              <p>His family was so proud. "You are the bravest rabbit!" they said. And from that day on, Hoppy knew that being brave means facing your fears and hopping away!</p>
              <p style={{fontSize: '1.5rem', marginTop: '20px'}}>The End! 🌟</p>
            </div>
          </div>

          {/* Animal Guessing Game */}
          <div style={{background: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
            <h2>🐾 Guess the Animal!</h2>
            <p>Look at this animal and type its name!</p>
            <p style={{fontSize: '4rem', textAlign: 'center'}}>{currentAnimal.emoji}</p>
            <input
              type="text"
              value={animalGuess}
              onChange={(e) => setAnimalGuess(e.target.value.toLowerCase())}
              style={{padding: '8px', fontSize: '1rem', marginRight: '10px'}}
              placeholder="Animal name"
            />
            <button onClick={() => {
              if (animalGuess === currentAnimal.name) {
                setAnimalResult(`🎉 Correct! It's a ${currentAnimal.name}!`);
                setTimeout(() => {
                  generateNewAnimal();
                }, 2000);
              } else {
                setAnimalResult('❌ Try again! Hint: It starts with a letter!');
              }
            }} style={{background: '#ff5722', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Guess</button>
            <p style={{marginTop: '10px', fontWeight: 'bold'}}>{animalResult}</p>
          </div>

        </div>
      </header>
    </div>
  );
}

export default Activities;
