import React from 'react';
import { Navigate , useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
    const storeduser = useSelector((state) => state.auth.user);
    const logeduser = useSelector((state) => state.auth.logeduser);
    localStorage.setItem('userredirect', location.pathname);

    
    
    if (!storeduser) {
        return <Navigate to='/shop/signup' />;
    } else if (!logeduser) {
        return <Navigate to='/shop/login' />;
    }

    return children;
};

export default PrivateRoute;
