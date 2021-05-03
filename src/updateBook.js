import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import styles from './index.css';
import Submitted from './submitted.js';

class updateBook extends Component {

    render()
    {

        return(
            <div>
            <header className="header" style={{fontSize: 26, fontWeight: 'bold'}}></header>
    
            <form method = "put" form action='http://localhost:4001/updatedata'>
            <div style={{alignContent: 'flex-start'}}>
            <p>title of book to find</p> <input type="text" name="title" />
            </div>
            </form>
            </div>
        );
    }
}

export default updateBook;