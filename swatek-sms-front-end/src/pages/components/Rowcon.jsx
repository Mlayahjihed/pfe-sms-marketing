import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { Modal, Button } from 'react-bootstrap';
import { Deletecon } from '../../redux/action/contact';
import Mofcon from './client/mofcon';
const Rowcon = ({id ,nom, prenom, age,sexe,region,telephone,datenaiss,datedec }) => {
    const  [Openmodal,Setopenmodal] =useState(false);
    const handelModal =(aze)=>
    {
        Setopenmodal(aze)

    }
    const dispatch =  useDispatch()
  const DeleteHandler = (id)=>{
      dispatch(Deletecon(id))
    }
    return (
        
            <tr>
            <td>{nom} </td>
            <td>{prenom} </td>
            <td>{age} ans</td>
            <td>{sexe}</td>
            <td>{region}</td>
            <td>{telephone} </td>
            <td>{datenaiss}</td>
            <td>{datedec}</td>
            <td> <button type="Achat" class="btn btn-dark" onClick={()=>{handelModal(true)}} > <i class="fa fa-pencil-square-o"></i> modifier</button>   <button  class="btn btn-danger" onClick={()=>DeleteHandler(id)}><i className="fa fa-trash"></i> suprimer</button></td>
            <Modal show ={Openmodal} onHide={()=>{handelModal()}}>
                    <Modal.Header closeButton> Modification contact:</Modal.Header>
                    <Modal.Body>
                    <Mofcon id={id} datenaiss={datenaiss} datedec={datedec} nom={nom} prenom={prenom} age={age} sexe={sexe} region={region} telephone={telephone}/>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                    </Modal>
            </tr>
        
    );
}

export default Rowcon;
