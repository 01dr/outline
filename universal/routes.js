/**
 * Created by x22a on 25.02.16.
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './containers/main/Main'

export default (
    <Route path='/'>
        <IndexRoute component={ Main } />
    </Route>
);