import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Deletefor } from '../../redux/action/forfait';
import { useDispatch } from 'react-redux'
import Modforfait from "./admin/modforfait";

const Rowfor = ({id, nompack ,prix ,nbrsms , validite,dateD,dateF}) => {
  const  [Openmodal,Setopenmodal] =useState(false);
    const handelModal =(aze)=>
    {
        Setopenmodal(aze)

    }
  const dispatch =  useDispatch()
  const DeleteHandler = (id)=>{
      dispatch(Deletefor(id))
    }

   
    
  
    
        return (
        
            <tr>
            <td>{nompack} </td>
            <td>{prix} DT</td>
            <td>{nbrsms}</td>
            <td>{validite} Mois</td>
            <td>{dateD}</td>
            <td>{dateF}</td>
            
            <td> <button type="Achat" class="btn btn-dark" onClick={()=>{handelModal(true)}}><i class="fa fa-pencil-square-o" aria-hidden="true"></i> modifier</button>   <button  class="btn btn-danger" onClick={()=>DeleteHandler(id)} ><i class="fa fa-trash" aria-hidden="true"></i> suprimer</button></td>
    
            <Modal show ={Openmodal} onHide={()=>{handelModal()}}>
                    <Modal.Header closeButton> Modification Profile:</Modal.Header>
                    <Modal.Body>
                    <Modforfait  id={id} nompack={nompack} prix={prix} nbrsms={nbrsms}  validite={validite} dateD={dateD}dateF={dateF} />
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-outline-danger' onClick ={()=>{handelModal(false)}} >
                            Annuler
                        </button>
                       
                    </Modal.Footer>
                    </Modal>
          </tr>
    
           
        );
    
}

export default Rowfor;
