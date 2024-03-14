import React from 'react';
import { useDispatch } from 'react-redux'
import { delach, upach } from '../../redux/action/forfait';

const Rowdemfor = ({id, paiment,email ,prix ,telephone ,nompack, datedeb,etat}) => {
    const dispatch =  useDispatch()
    
    const DeleteHandler = (id)=>{
        dispatch(delach(id))
      }
      const onSubmit = (e)=>{
        e.preventDefault();
        dispatch(upach(id))
        }
    return (
        <tr>
            <td>{email} </td>
            <td>{telephone} </td>
            <td>{nompack} dt</td>
            <td>{prix}</td>
            <td>{datedeb}</td>
            <td>{etat}</td>
            <td>{paiment}</td>
            <td> <button type="Accepter" class="btn btn-dark" onClick={onSubmit} ><i class="fa fa-check" aria-hidden="true"></i> Accepter</button>   <button  class="btn btn-danger" onClick={()=>DeleteHandler(id)} ><i class="fa fa-trash" aria-hidden="true"></i> suprimer</button></td>
            </tr>
    );
}

export default Rowdemfor;
