import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import { connect } from 'react-redux';
import { checkAuthentication } from './redux/User/user.asyncActions';


const ProtectedRoute = ({ component: Component, user, ...rest }) => (
    <Route {...rest} render={(props) => (
        user !== '-'
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

const Routes = ({ user, checkAuthentication }) => {

    useEffect(async () => {
        await checkAuthentication();
    }, [])

    return (
        <Switch>
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <ProtectedRoute exact path='/' component={Home} user={user} />
            {/* <Route exact path='/invoices' component={InvoicePage}/>
            <Route component={ErrorPage}/> */}
        </Switch>
    )
}

const mapStateToProps = (state) => {
    const { user = '-' } = state.user;

    return ({
        user,
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        checkAuthentication: () => dispatch(checkAuthentication()),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
