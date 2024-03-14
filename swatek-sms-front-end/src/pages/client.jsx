import React from 'react';
import Nav from './components/client/Nav';
import Profile from './profile';
import Forfaits from "./components/client/forfaits";
import Ajoutcon from "./components/client/ajoutcon";

import {
    Routes,
    Route,
  } from "react-router-dom";
import Allcontact from './components/client/allcontact';
import Groupe from './components/client/groupe';
import Dashbord from './components/client/dashbord';
import Sms from './components/client/sms';
import Accueil from './components/client/accueil';
import Planifie from './components/client/planifie';
import Historique from './components/client/Historique ';
import Reclamation from './components/client/reclamation';

const Client = () => {
    return (
      <>
      <div class="container-fluid">
      <div class="row flex-nowrap">
      <Nav /> 
      <Routes>
        <Route  exact path="profile" element={<Profile/>}/>
        <Route  exact path="allforfaits" element={<Forfaits/>}/>
        <Route  exact path="ajoutcon" element={<Ajoutcon/>}/>
        <Route  exact path="allcontact" element={<Allcontact/>}/>
        <Route  exact path="groupe" element={<Groupe/>}/>
        <Route  exact path="dash" element={<Dashbord/>}/>
        <Route  exact path="reclamtion" element={<Reclamation/>}/>
        <Route  exact path="sms" element={<Sms/>}/>
        <Route  exact path="" element={<Accueil/>}/>
        <Route  exact path="planifie" element={<Planifie/>}/>
        <Route  exact path="Historique" element={<Historique/>}/>
        <Route  exact path="Historique" element={<Historique/>}/>

      </Routes>
      </div>
      </div>
      </>
    );
}

export default Client;
