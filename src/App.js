import React from 'react';
import { Router, Route } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage} from './components'
import { history } from './_helpers/history.js'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Route exact path='/' component={ HomePage } />
            <Route path='/login' component={ LoginPage } />
            <Route path='/register' component={ RegisterPage } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
