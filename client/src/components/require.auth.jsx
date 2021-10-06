import React, { useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

export default (ChildComponent) => {
    const isAuth = async () => {
        const res = await axios.get(
            import.meta.env.VITE_API_URL + '/api/auth-check',
            {
                headers: {
                    'content-type': 'application/json',
                },
                withCredentials: true,
            }
        );
        const data = await res.data.isAuth;
        return data;
    };

    function ComposedComponent(props) {
        async function shouldNavigateAway() {
            if (
                !(await isAuth()) &&
                !(
                    window.location.href.split('/')[3] === 'signup' ||
                    window.location.href.split('/')[3] === 'login'
                )
            ) {
                props.history.push('/login');
            } else if (
                (await isAuth()) &&
                (window.location.href.split('/')[3] === 'signup' ||
                    window.location.href.split('/')[3] === 'login')
            ) {
                props.history.push('/');
            }
        }

        useEffect(() => {
            shouldNavigateAway();
        }, [shouldNavigateAway]);

        return <ChildComponent {...props} />;
    }

    return withRouter(ComposedComponent);
};
