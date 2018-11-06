import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


ReactDOM.render(
    <Provider>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    , document.getElementById('root'));