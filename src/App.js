import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Component} from 'react';
import {Button} from 'react-bootstrap'; 
import history from './history';


class App extends Component {

  render()
  {
  return (
    <div className="App">
      <form>
          <Button onClick={() => history.push('./createBook')}>Insert new book</Button> 
          </form>
          <Button onClick={() => history.push('./readBook')}>Read existing books</Button>
          <Button onClick={() => history.push('./updateBook')}>Update an existing book</Button>
          <Button onClick={() => history.push('./deleteBook')}>delete a book</Button>
    </div>
  );
  }
}

export default App;
