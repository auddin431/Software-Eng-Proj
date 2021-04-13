import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

export default function AuthUser(SecureComponent) {
    const [loading, setLoading] = useState(true);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch('/users/checkToken').then(res => {
            if(res.status == 200) {
                setLoading(false);
            } else {
                const err = new Error(res.err);
                throw err;
            }
        }).catch(err => {
            console.error(err);
            setLoading(false);
            setRedirect(true);
        });
    });

    if(loading) {
        return null;
    } else if(redirect) {
        return <Redirect to="/SignUp"/>;
    } else {
        return <SecureComponent/>;
    }
}

