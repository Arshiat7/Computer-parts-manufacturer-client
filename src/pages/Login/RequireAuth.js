import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()
    if(loading){
        return <div className='ml-auto mr-auto mt-2'><button class="btn btn-square  loading"></button></div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
  }
    
    return children;
    };

export default RequireAuth;