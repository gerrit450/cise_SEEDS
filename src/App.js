import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import connection from './connect.js';

class App extends Component {

  state = {txt: "Welcome!"};

  render()
  {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.txt}
        </p>
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
}

export default App;
