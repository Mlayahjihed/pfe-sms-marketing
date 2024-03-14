import React from 'react';
import Nav from './components/admin/Nav';
import Profiles from './components/admin/Profiles';
import Msg from './components/admin/Msg';
import Profile from './profile'
import Allforfait from './components/admin/Allforfait';
import Aforfait from './components/admin/Aforfait';
import Alldemandeachat from './components/admin/alldemandeachat';
import {
    Routes,
    Route,
  } from "react-router-dom";
import Statistique from './components/admin/statistique';

const Admin = () => {
  
    return ( 
        
        <>
        <div class="container-fluid">
          <div class="row flex-nowrap">
        <Nav /> 
        
        <Routes>
          <Route  exact path="profiles" element={<Profiles/>}/>
          <Route  exact path="reclamation" element={<Msg/>}/>
          <Route  exact path="Profile" element={<Profile/>}/>
          <Route  exact path="ajoutforfait" element={<Aforfait/>}/>
          <Route  exact path="allforfait" element={<Allforfait/>}/>
          <Route  exact path="alldem" element={<Alldemandeachat/>}/>
          <Route  exact path="" element={<Statistique/>}/>
        </Routes>
        </div>
        </div>
        </>
    );
}

export default Admin;
