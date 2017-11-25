import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './state/store';
import routes from './routes';
import './style.css';

const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: state => state.get('routing')
});

ReactDOM.render((
    <Provider store={ store }>
        <Router history={ history }>
            { routes }
        </Router>
    </Provider>
), document.querySelector("#myApp"));
