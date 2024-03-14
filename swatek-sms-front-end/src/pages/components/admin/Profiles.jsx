import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { GetProfiles } from '../../../redux/action/profile'
import Rowdetai from '../rowdetai'
const Profiles = () => {
    const profiles = useSelector(state => state.profiles);

    const dispatch = useDispatch();


    useEffect(async () => {
        await dispatch(GetProfiles())
    }, []);

    return (

        <div class="col py-3">
           <table class="table table-light table-sm table-striped ">
  <thead>
    <tr>
      <th scope="col">Nom et Prénom</th>
      <th scope="col">Télephone</th>
      <th scope="col">Sociéte</th>
      <th scope="col">Email</th>
      <th scope="col"></th>


    </tr>
  </thead>
  <tbody>
  {
                profiles.profiles.map(({ _id, nomprenom, telephone, email, socite }) => (
                    <Rowdetai _id={_id} telephone={telephone} nomprenom={nomprenom} socite={socite} email={email} />
                ))
            }
   
  </tbody>
</table>
            
          
            

        </div>
    );
}

export default Profiles;
