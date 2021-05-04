import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import display from './views/display.ejs';
import app from './App.js';


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={app}/>
                    <Route path="/display" exact component={display}/>
                </Switch>
            </Router>
        )
    }
}