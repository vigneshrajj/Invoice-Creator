import React, { useEffect } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom';

export default (ChildComponent) => {

    const isAuth = async () => {
        const res = await axios.get('http://localhost:3001/api/auth-check', {
            headers: {
                'content-type': 'application/json'
            }
        });
        console.log(res.data.isAuth, "second");
        return res.data.isAuth;
    }

    function ComposedComponent(props) {
        function shouldNavigateAway() {
            if (!isAuth()) props.history.push("/login");
        }

        useEffect(() => {
            shouldNavigateAway();
            console.log(props)
        }, [shouldNavigateAway]);

        return <ChildComponent {...props} />;
    }

    return withRouter(ComposedComponent);
};