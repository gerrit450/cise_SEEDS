import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import createBook from './createBook.js';
import readBook from './views/readBook.ejs';
import updateBook from './updateBook.js';
import deleteBook from './deleteBook.js';
import app from './App.js';


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={app}/>
                    <Route path="/createBook" exact component={createBook}/>
                    <Route path="/readBook" component={readBook} />
                    <Route path="/updateBook" component={updateBook} />
                    <Route path="/deleteBook" component={deleteBook} />
                </Switch>
            </Router>
        )
    }
}