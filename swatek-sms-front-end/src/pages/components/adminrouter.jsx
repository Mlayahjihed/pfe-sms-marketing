import React from 'react';
import { Navigate } from 'react-router-dom';

const Adminrouter = ({user , children}) => {
    if(!user.isConnected){
        return <Navigate to="/Login" replace></Navigate>
    }else{
        if(user.role !== "ADMIN"){
                   return <Navigate to="/Login" replace></Navigate>
 
        }
    }
    return children;
}

export default Adminrouter;
