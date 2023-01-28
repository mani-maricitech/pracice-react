import loading from './loading.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={loading} className="App-logo" alt="logo" />
        <p>
          Marici Technologies PVT.LTD under maintenance.
        </p>
        <a
          className="App-link"
          href="mailto:mani.maricitech.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Marici support team.
        </a>
      </header>
    </div>
  );
}

export default App;
