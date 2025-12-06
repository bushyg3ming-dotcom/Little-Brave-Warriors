import './App.css';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

function Activities() {
  const [mathAnswer, setMathAnswer] = useState('');
  const [mathResult, setMathResult] = useState('');
  const [currentProblem, setCurrentProblem] = useState({ num1: 3, num2: 4, answer: 7 });
  const canvasRef = useRef(null);
  const [currentDot, setCurrentDot] = useState(0);
  const [dots, setDots] = useState([]);

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

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const startPuzzle = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Define dots for a simple house shape
    const houseDots = [
      { x: 50, y: 200, num: 1 },   // bottom left
      { x: 250, y: 200, num: 2 },  // bottom right
      { x: 250, y: 100, num: 3 },  // top right
      { x: 150, y: 50, num: 4 },   // roof peak
      { x: 50, y: 100, num: 5 },   // top left
      { x: 50, y: 200, num: 6 }    // back to start
    ];

    setDots(houseDots);
    setCurrentDot(0);

    // Draw dots and numbers
    ctx.fillStyle = 'black';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';

    houseDots.forEach(dot => {
      // Draw dot
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, 8, 0, Math.PI * 2);
      ctx.fill();

      // Draw number
      ctx.fillStyle = 'white';
      ctx.fillText(dot.num.toString(), dot.x, dot.y + 5);
      ctx.fillStyle = 'black';
    });
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

          {/* Puzzle Section */}
          <div style={{background: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
            <h2>🧩 Connect the Dots Puzzle!</h2>
            <p>Click "Start Puzzle" to begin, then click on the dots in order from 1 to 6 to draw a house!</p>
            <canvas
              ref={canvasRef}
              width="300"
              height="250"
              style={{border: '2px solid #333', borderRadius: '5px', cursor: 'pointer', display: 'block', margin: '0 auto'}}
              onMouseDown={(e) => {
                if (dots.length === 0) return;

                const canvas = canvasRef.current;
                const ctx = canvas.getContext('2d');
                const rect = canvas.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // Check if clicked on the next dot
                const nextDot = dots[currentDot];
                const distance = Math.sqrt((x - nextDot.x) ** 2 + (y - nextDot.y) ** 2);

                if (distance < 15) { // Within click radius
                  // Draw line from previous dot if not first
                  if (currentDot > 0) {
                    const prevDot = dots[currentDot - 1];
                    ctx.strokeStyle = 'blue';
                    ctx.lineWidth = 3;
                    ctx.beginPath();
                    ctx.moveTo(prevDot.x, prevDot.y);
                    ctx.lineTo(nextDot.x, nextDot.y);
                    ctx.stroke();
                  }

                  // Mark dot as completed
                  ctx.fillStyle = 'green';
                  ctx.beginPath();
                  ctx.arc(nextDot.x, nextDot.y, 8, 0, Math.PI * 2);
                  ctx.fill();

                  // Move to next dot
                  if (currentDot < dots.length - 1) {
                    setCurrentDot(currentDot + 1);
                  } else {
                    // Puzzle complete!
                    ctx.fillStyle = 'red';
                    ctx.font = '20px Arial';
                    ctx.textAlign = 'center';
                    ctx.fillText('🎉 Great Job! 🎉', 150, 30);
                  }
                }
              }}
            ></canvas>
            <div style={{marginTop: '10px'}}>
              <button onClick={startPuzzle} style={{background: '#4CAF50', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '10px'}}>Start Puzzle</button>
              <button onClick={clearCanvas} style={{background: '#f44336', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Clear</button>
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default Activities;
