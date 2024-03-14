import React, { useEffect } from 'react';
import Rowfor from "../Rowfor";
import { useDispatch, useSelector } from 'react-redux'
import {allforfaits } from '../../../redux/action/forfait'

const Allforfait = () => {
    const forfaits = useSelector(state => state.forfaits);
    const dispatch = useDispatch();

    useEffect(async () => {
        await dispatch(allforfaits())
    }, []);
        return (

            <div class="col py-3">
               <table class="table table-light table-sm table-striped ">
      <thead>
        <tr>
          <th scope="col">Nom de Pack </th>
          <th scope="col">Prix </th>
          <th scope="col">Nomber d'SMS </th>
          <th scope="col">Validité </th>
          <th scope="col">date debut</th>
          <th scope="col">date fin </th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
      {
                forfaits.forfaits.map(({_id ,nompack, prix, nbrsms,validite,dateD,dateF}) => (
                    <Rowfor id={_id} nompack={nompack} prix={prix} nbrsms={nbrsms}  validite={validite} dateD={dateD}dateF={dateF} />
                ))
            }
       
      </tbody>
    </table>
                
              
                
    
            </div>
        );
    
}

export default Allforfait;
