import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {allcontacts } from '../../../redux/action/contact'
import Rowcon from "../Rowcon";
const Allcontact = () => {
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(allcontacts())
    }, []);
    return (
        
        <div class="col py-3">
            {contacts.contacts.length!==0?
        <table class="table table-light table-sm table-striped ">
<thead>
 
   <th scope="col">Nom  </th>
   <th scope="col">Prénom </th>
   <th scope="col">Age </th>
   <th scope="col">sexe</th>
   <th scope="col">Région</th>
   <th scope="col">Télephone</th>
   <th scope="col">date naissace</th>
   <th scope="col">date decee</th>
   <th scope="col"></th>
 
</thead>
<tbody>
{
                contacts.contacts.map(({_id ,nom,sexe, prenom, age, region,telephone,datenaiss,datedec }) => (
                    <Rowcon id={_id} sexe={sexe}nom={nom} prenom={prenom} age={age} datenaiss={datenaiss} datedec={datedec}region={region} telephone={telephone} />
                ))
            }
            

</tbody>
</table>:<div> <h1>Aucune contact ajouter</h1></div>
         
       
         
        }
     </div>
    );
}

export default Allcontact;
