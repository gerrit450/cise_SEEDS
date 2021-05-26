import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import display from './views/display.ejs';
import addArticle from './Form/addArticle.js';
import app from './App.js';


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={app}/>
                    <Route path="/display" exact component={display}/>
                    <Route path="/addArticle" exact component={addArticle}/>
                </Switch>
            </Router>
        )
    }
}