import './App.css';
import {Component} from 'react';
import styles from './index.css';

let title;
let published;
let firstname;
let lastname;
class submitted extends Component {

  state = {txt: "Welcome my to interactive book database!"};
  stateval = {value: ""};
  
  render()
  {
  return (
    <div className="App" style={{backgroundColor: 'lightblue', height: 760}}>
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

export default submitted;
