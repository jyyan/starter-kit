import React from 'react';
import { Route } from 'react-router';
import App from './views/app';

export default (
    <Route path='/' component={ App }>
        <Route path='hey' component={ App }/>
    </Route>
);

