import React, { useContext } from 'react';
import { AuthContextData } from '../AuthContext/AuthContextCompo';
import { Navigate, useLocation } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner'

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContextData)
    const location = useLocation()
    if (loading) {
        return <div className='min-h-screen flex justify-center items-center' style={{ background: '#0f1d22' }}>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    }
    if (!user) {
        return <Navigate to='/signin' state={location}></Navigate>
    }

    return (
        children
    );
};

export default PrivateRoute;