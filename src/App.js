import "./App.css";

import TicTacToeGrid from "./components/tic-tac-toe-grid/TicTacToeGrid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <TicTacToeGrid />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
