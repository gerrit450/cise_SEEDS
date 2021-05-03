import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import styles from './index.css';
import Submitted from './submitted.js';

let title;
let published;
let firstname;
let lastname;
class createBook extends Component {

  state = {txt: "Welcome my to interactive book database!"};
  stateval = {value: ""};
  
  render()
  {

    // /formdata                -react http://localhost:3000/formdata

    // /formdata                -express http://localhost:4001/formdata
  return (
    <div className="App" style={{backgroundColor: 'lightblue', height: 760}}>
        <header className="header" style={{fontSize: 26, fontWeight: 'bold'}}>
          {this.state.txt}
        </header>

        <form method = "post" form action='http://localhost:4001/formdata'>
        <div style={{alignContent: 'flex-start'}}>
        <p>Title</p> <input type="text" name="title" />
        </div>

        <div>
        <input type="text" name="firstname" />
        </div>

        <div>
        <input type="text" name="lastname" />
        </div>

        <div>
        <input type="date" name="date" />
        </div>

        <input type="submit" value="Submit" />
      </form>
        <p style={{marginRight: 280, marginTop: 655}}> 
          ID: 169 593 02
          Name: Gerrit van zyl
        </p>
    </div>
  );
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.stateval.value);
    event.preventDefault();
  }
}

export default createBook;
