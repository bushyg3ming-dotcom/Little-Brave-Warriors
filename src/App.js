import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <svg className="rocking-horse" width="120" height="120" viewBox="0 0 120 120">
          <path d="M20 90 Q60 70 100 90" stroke="#8B4513" stroke-width="6" fill="none"/>
          <ellipse cx="60" cy="70" rx="25" ry="18" fill="#D2691E"/>
          <circle cx="55" cy="50" r="10" fill="#8B4513"/>
          <line x1="45" y1="50" x2="35" y2="40" stroke="#8B4513" stroke-width="3"/>
          <path d="M60 55 Q65 45 70 55" stroke="#000" stroke-width="2" fill="none"/>
          <circle cx="52" cy="48" r="2" fill="#000"/>
          <circle cx="58" cy="48" r="2" fill="#000"/>
        </svg>
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

export default App;
