
import { Gethis } from '../../../redux/action/sms';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const Historique = () => {
    const sms = useSelector(state => state.sms);
    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(Gethis())
    }, []);
    return (
        <div class="col py-3">
        <table class="table table-light table-sm table-striped ">
<thead>
 
   <th scope="col">Entéte </th>
   <th scope="col">SMS </th>
   <th scope="col">Nombres Contacts </th>
   <th scope="col">Date d'envoi </th>

 
</thead>
<tbody>
{
               sms.sms.map(({entet ,sms,destinataire,dateenv}) => (
                    <tr>
                    <td>{entet} </td>
                    <td>{sms} </td>
                    <td>{destinataire.length} </td>
                    <td>{dateenv}</td>
                    
        
                     </tr>
                ))
            }

</tbody>
</table>
         
       
         

     </div>
    );
}

export default Historique;
