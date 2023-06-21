import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({path, children}) => {
    return (
        <NavLink to={path} className={({isActive})=> `p-3 ${isActive? 'border-b border-green-500' : ''}`}>{children}</NavLink>
    );
};

export default ActiveLink;