import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import requireAuth from './require.auth';
import { logout } from '../redux/User/user.asyncActions';

const Home = ({ logout, history }) => {
    const logoutAction = async () => {
        await logout();
        history.push('/login');
    }
    return (
        <div>
            <div className="w-full h-screen flex items-center justify-center overflow-y-scroll bg-gray-800">
                <button onClick={logoutAction} className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">Logout</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
    });
}

export default connect(null, mapDispatchToProps)(withRouter(requireAuth(Home)));
