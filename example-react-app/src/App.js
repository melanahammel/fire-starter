import fire from './fire.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Fire Starter!</h1>
        <img src={fire} className="App-logo" alt="fire" />
        <a
          className="App-link"
          href="https://github.com/melanahammel/fire-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started on Github
        </a>
      </header>
    </div>
  );
}

export default App;
