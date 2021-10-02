import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/invoices' component={InvoicePage}/>
            <Route component={ErrorPage}/> */}
        </Switch>
    );
};

export default Routes;
