import logo from './logo.svg';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_YOUR_GIGIH_APP_API_KEY);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://hainovitalia.blogspot.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ini blog novi
        </a>
      </header>
    </div>
  );
}

export default App;
