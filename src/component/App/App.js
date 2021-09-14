import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import {Footer} from 'component/Footer';
import {DeckSelection} from 'component/DeckSelection';
import {CardList} from 'component/CardList';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import './App.scss';

const history = createBrowserHistory();

export const App = () => {
    return (
        <Router history ={history}>
        <div className="page-holder">
            <div className="wrapper">
                <div className="container">
                    <Link to="/cards" className="by-text">BY MARIANA VECHIRKO</Link>
                    <Switch>
                        <Route path="/cards/:url" component={CardList} exact />
                        <Route path="*" component={DeckSelection} />
                    </Switch>
                </div>
            </div>
            <Footer />
        </div>
        </Router>
    );
}

