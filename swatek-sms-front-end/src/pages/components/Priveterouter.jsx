import React from 'react';
import { Navigate } from 'react-router-dom';

const Priveterouter = ({user , children}) => {
   
       if(!user.isConnected){
           return <Navigate to="/Login" replace></Navigate>
       }else{
        if(user.role !== "USER"){
            return <Navigate to="/Nota" replace></Navigate>
 
        }}
       return children;
    
}

export default Priveterouter;
