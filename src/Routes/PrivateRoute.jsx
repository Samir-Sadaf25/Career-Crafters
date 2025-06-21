import React, { use } from 'react';
import { Navigate } from 'react-router';
import Loader from '../Components/Loader';
import { AuthContext } from '../Provider/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    if (loading) {
        return <Loader></Loader>
    }
    if (user && user.email) {
        return children;
    }
    return <Navigate to={'/login'}></Navigate>

};

export default PrivateRoute;