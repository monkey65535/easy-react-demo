import React, {Component} from 'react';
import {Router,Route,hashHistory} from 'react-router';

import Index from '../index/Index'
class App extends Component {
    render() {
        return (
            <Router className="App" history={hashHistory}>
                <Route component={Index} path='/'></Route>
            </Router>
        );
    }
}

export default App;
