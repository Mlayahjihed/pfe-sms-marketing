import React, { useEffect } from 'react';
import Rowdemfor from '../Rowdemfor';
import {allachat } from '../../../redux/action/forfait'
import { useDispatch, useSelector } from 'react-redux'
const Alldemandeachat = () => {
    const achats = useSelector(state => state.achats);
    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(allachat())
    }, []);
    return (
        <div class="col py-3">
            <br></br>
            <br></br>
            
               <table class="table table-light table-sm table-striped ">
      <thead>
        <tr>
          <th scope="col">Email</th>
          <th scope="col">Téléphone </th>
          <th scope="col">Nom Pack </th>
          <th scope="col">prix </th>
          <th scope="col">Date D'achat </th>
          <th scope="col">Etat </th>
          <th scope="col">Mode De Paiement </th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>

      {
                achats.achats.map(({_id ,forfait, user,dateachat,etat ,paiment}) => (
                    <Rowdemfor id={_id} email={user.email} etat={etat} paiment={paiment} nompack={forfait.nompack} prix={forfait.prix} telephone={user.telephone} datedeb={dateachat} />
                ))
            }
     
       
      </tbody>
    </table>
                
              
                
    
            </div>
    );
}

export default Alldemandeachat;
