import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import store from './store'


ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>, document.getElementById('root'));

