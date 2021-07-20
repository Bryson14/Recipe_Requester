import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>I demand to to speak with your manager! - Karen</p>
        </header>
      </div>
      
    </Router>
    
  );
}

export default App;
