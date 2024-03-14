import React from 'react';
import { useDispatch } from "react-redux";
import { DeleteProfile } from "../../redux/action/profile";
const Rowdetai = ({_id,nomprenom,telephone,email,socite}) => {
    const dispatch =  useDispatch()
    const DeleteHandler = (id)=>{
        dispatch(DeleteProfile(id))
      }
    return (
        
        <tr>
        <td> {nomprenom}</td>
        <td>{telephone}</td>
        <td>{socite}</td>
        <td>{email}</td>
        <td> <button  class="btn btn-danger" onClick={()=>DeleteHandler(_id)}> <i class="fa fa-trash" aria-hidden="true"></i> suprimer</button></td>

      </tr>

       
    );
}

export default Rowdetai;
