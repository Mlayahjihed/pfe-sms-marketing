import React from 'react';
import { Navigate } from 'react-router-dom';

const Forceredirect = ({user , children}) => {
    if(user.isConnected){
        if (user.role === "ADMIN" ){
        return <Navigate to="/Admin" replace></Navigate>}
        else{
            return <Navigate to="/Client" replace></Navigate>
        }
    } 

    
    return children;
}

export default Forceredirect;
