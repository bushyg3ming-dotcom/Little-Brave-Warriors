import './App.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Activities() {
  const [mathAnswer, setMathAnswer] = useState('');
  const [mathResult, setMathResult] = useState('');
  const [currentProblem, setCurrentProblem] = useState({ num1: 3, num2: 4, answer: 7 });
  const [placedPieces, setPlacedPieces] = useState([]);

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

          {/* Puzzle Section */}
          <div style={{background: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
            <h2>🧩 Jigsaw Puzzle!</h2>
            <p>Drag the puzzle pieces into the correct positions to complete the smiley face!</p>

            {/* Puzzle Area */}
            <div style={{display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px'}}>
              {/* Target Area */}
              <div style={{width: '200px', height: '200px', border: '2px dashed #333', borderRadius: '10px', position: 'relative', backgroundColor: '#f9f9f9'}}>
                <div
                  id="drop-zone-1"
                  style={{
                    position: 'absolute',
                    top: '25px',
                    left: '25px',
                    width: '50px',
                    height: '50px',
                    border: placedPieces.includes('eye1') ? 'none' : '2px solid #ccc',
                    borderRadius: '50%',
                    backgroundColor: placedPieces.includes('eye1') ? '#333' : 'transparent'
                  }}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const pieceId = e.dataTransfer.getData('piece');
                    if (pieceId === 'eye1' && !placedPieces.includes('eye1')) {
                      const newPlaced = [...placedPieces, 'eye1'];
                      setPlacedPieces(newPlaced);
                      if (newPlaced.length === 3) {
                        setTimeout(() => setPlacedPieces([]), 3000);
                      }
                    }
                  }}
                ></div>
                <div
                  id="drop-zone-2"
                  style={{
                    position: 'absolute',
                    top: '25px',
                    right: '25px',
                    width: '50px',
                    height: '50px',
                    border: placedPieces.includes('eye2') ? 'none' : '2px solid #ccc',
                    borderRadius: '50%',
                    backgroundColor: placedPieces.includes('eye2') ? '#333' : 'transparent'
                  }}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const pieceId = e.dataTransfer.getData('piece');
                    if (pieceId === 'eye2' && !placedPieces.includes('eye2')) {
                      const newPlaced = [...placedPieces, 'eye2'];
                      setPlacedPieces(newPlaced);
                      if (newPlaced.length === 3) {
                        setTimeout(() => setPlacedPieces([]), 3000);
                      }
                    }
                  }}
                ></div>
                <div
                  id="drop-zone-3"
                  style={{
                    position: 'absolute',
                    bottom: '25px',
                    left: '75px',
                    width: '50px',
                    height: '30px',
                    border: placedPieces.includes('mouth') ? 'none' : '2px solid #ccc',
                    borderRadius: '25px',
                    backgroundColor: placedPieces.includes('mouth') ? '#333' : 'transparent'
                  }}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const pieceId = e.dataTransfer.getData('piece');
                    if (pieceId === 'mouth' && !placedPieces.includes('mouth')) {
                      const newPlaced = [...placedPieces, 'mouth'];
                      setPlacedPieces(newPlaced);
                      if (newPlaced.length === 3) {
                        setTimeout(() => setPlacedPieces([]), 3000);
                      }
                    }
                  }}
                ></div>
              </div>

              {/* Puzzle Pieces */}
              <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                {!placedPieces.includes('eye1') && (
                  <div
                    draggable
                    onDragStart={(e) => e.dataTransfer.setData('piece', 'eye1')}
                    style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#333',
                      borderRadius: '50%',
                      cursor: 'grab',
                      border: '2px solid #000'
                    }}
                  ></div>
                )}
                {!placedPieces.includes('eye2') && (
                  <div
                    draggable
                    onDragStart={(e) => e.dataTransfer.setData('piece', 'eye2')}
                    style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#333',
                      borderRadius: '50%',
                      cursor: 'grab',
                      border: '2px solid #000'
                    }}
                  ></div>
                )}
                {!placedPieces.includes('mouth') && (
                  <div
                    draggable
                    onDragStart={(e) => e.dataTransfer.setData('piece', 'mouth')}
                    style={{
                      width: '50px',
                      height: '30px',
                      backgroundColor: '#333',
                      borderRadius: '25px',
                      cursor: 'grab',
                      border: '2px solid #000'
                    }}
                  ></div>
                )}
              </div>
            </div>

            {placedPieces.length === 3 && (
              <div style={{textAlign: 'center', marginTop: '20px'}}>
                <p style={{fontSize: '1.5rem', color: '#4CAF50', fontWeight: 'bold'}}>🎉 Puzzle Complete! Great Job! 🎉</p>
              </div>
            )}

            <div style={{marginTop: '10px', textAlign: 'center'}}>
              <button
                onClick={() => {
                  setPlacedPieces([]);
                }}
                style={{background: '#f44336', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}
              >
                Reset Puzzle
              </button>
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default Activities;
