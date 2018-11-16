import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import NewPunch from './Component/NewPunch/NewPunch';
import EditPunch from './Component/EditPunch/EditPunch';

export default (
    <Switch>
        <Route component={Dashboard} exact path='/' />
        <Route component={NewPunch} exact path='/newpunch' />
        <Route component={EditPunch} exact path='/editpunch/:id' />
    </Switch>
)