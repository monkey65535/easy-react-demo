import React, {Component} from 'react';
import {Router,Route,hashHistory} from 'react-router';

import Index from '../index/Index';
import UserLogin from '../UserLogin/UserLogin';
import PageDetail from '../PageDetail/PageDetail';
class App extends Component {
    render() {
        return (
            <Router className="App" history={hashHistory}>
                <Route component={Index} path='/'></Route>
                <Route component={UserLogin} path='/login'></Route>
                <Route component={PageDetail} path='/details/:uniquekey'></Route>
            </Router>
        );
    }
}

export default App;
