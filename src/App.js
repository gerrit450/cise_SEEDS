import logo from './logo.svg';
import React from 'react';
import './App.css'; //importing css file
import {Component} from 'react';
import pic from  './assets/seeds.png';

class App extends Component {

  render()
  {
  return (
    <div className="App">
      <text style={{fontWeight:'bold',fontSize:32}}>Project SEEDS</text>
      <img src={pic} style={{resize: 'initial', width: 100}} />
    <form action="http://localhost:4001/results" method="post">
      <br/><br/>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search for SE practices</span>
            <br/>
        </label>
        <input
            type="text"
            placeholder="Search blog posts"
            name="search" 
        />
        <button type="submit">Search</button>
    </form>
    </div>
  );
  }

}
export default App;
