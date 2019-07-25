import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/landing';
import SignUpView from './components/signUpView';
import NotFound from './components/notFound'
import Home from './components/home'


class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={Landing} />
                    <Route path='/signup' component={SignUpView} />
                    <Route path='/home' component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))