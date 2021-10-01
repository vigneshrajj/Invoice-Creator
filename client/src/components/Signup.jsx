import React, { useState } from 'react'
import { connect } from 'react-redux';
import { signup, googleSignin } from '../redux/User/user.asyncActions';
import { GoogleLogin } from 'react-google-login';
import { withRouter, Link } from 'react-router-dom';
import requireAuth from './require.auth';

const Signup = ({ errors, signup, googleSignin, history }) => {
    const [fields, setFields] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
    });
    const [googleErrors, setGoogleErrors] = useState('');

    const updateFields = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value });
    }

    const submitForm = async () => {
        await signup(fields);
        history.push('/');
        setFields({
            name: '',
            email: '',
            password: '',
            phone: '',
        })
    }

    const responseSuccessGoogle = async (res) => {
        setGoogleErrors('');
        await googleSignin({
            tokenId: res.tokenId,
            name: res.profileObj.name,
            email: res.profileObj.email,
        });
        history.push('/');
    }

    const responseFailGoogle = (res) => {
        setGoogleErrors(res.error.split('_').join(' '));
    }
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center overflow-y-scroll bg-gray-800">
            <div className="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
                <label className="font-light text-4xl mb-4"><span className="font-bold">Invoicer</span></label>
                <input onChange={updateFields} name="name" value={fields.name} type="text" className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="Full Name" />
                {errors.name &&
                    <div className="bg-red-200 capitalize rounded-md text-center p-2 w-full mb-4 text-sm text-red-700" role="alert">
                        {errors.name}
                    </div>
                }
                <input onChange={updateFields} name="email" value={fields.email} type="text" className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="Email" />
                {errors.email &&
                    <div className="bg-red-200 capitalize rounded-md text-center p-2 w-full mb-4 text-sm text-red-700" role="alert">
                        {errors.email}
                    </div>
                }
                <input onChange={updateFields} name="password" value={fields.password} type="password" className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="Password" />
                {errors.password &&
                    <div className="bg-red-200 capitalize rounded-md text-center p-2 w-full mb-4 text-sm text-red-700" role="alert">
                        {errors.password}
                    </div>
                }
                <input onChange={updateFields} name="phone" value={fields.phone} type="text" className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="Phone number" />
                {errors.phone &&
                    <div className="bg-red-200 capitalize rounded-md text-center p-2 w-full mb-4 text-sm text-red-700" role="alert">
                        {errors.phone}
                    </div>
                }
                <button onClick={submitForm} className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">Signup</button>
                {/* <p className="text-right mb-4">Forgot password</p> */}
                <label className="text-gray-800 mb-4">or</label>
                <GoogleLogin
                    clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} className="w-full h-12 rounded-lg bg-red-600 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4">Sign with Google</button>
                    )}
                    buttonText="Login"
                    onSuccess={responseSuccessGoogle}
                    onFailure={responseFailGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                {googleErrors &&
                    <div className="bg-red-200 capitalize rounded-md text-center p-2 w-full mb-4 text-sm text-red-700" role="alert">
                        {googleErrors}
                    </div>
                }
                {/* <button className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">Sign with Facebook</button>
                <button className="w-full h-12 rounded-lg bg-gray-800 text-gray-200 uppercase font-semibold hover:bg-gray-900 text-gray-100 transition mb-4">Sign with Github</button> */}
            </div>
            <p className="text-gray-100 mt-2">Already have an account? <Link to='/login'><a className="text-gray-500">Login</a></Link></p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        user: state.user.user,
        errors: state.user.errors,
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        signup: (payload) => dispatch(signup(payload)),
        googleSignin: (payload) => dispatch(googleSignin(payload)),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(requireAuth(Signup)));
