import React from 'react';
import './App.css'; //importing css file
import {Component} from 'react';
import pic from  './assets/seeds.png';
import run from './Form/form.js';

class App extends Component {

  render()
  {
  var r;
  r = new run();
  return (
    r.create()
  );
  }

}
export default App;
