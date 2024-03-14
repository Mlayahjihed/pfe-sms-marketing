import React from 'react';
import { useDispatch } from 'react-redux'
import { Deletegr, upgr } from '../../redux/action/contact';

const Rowgroupe = ({id ,nomgroupe,list }) => {
    const dispatch =  useDispatch()
    const DeleteHandler = (id)=>{
        dispatch(Deletegr(id))
      }
      const onSubmit = ()=>{
        dispatch(upgr(id))
        }
    return (
        
        <div className="col-md-4">
        <div class="card  border-dark p-3 text-center">
                    <div class="card-body">
                        <h4 class="card-title  ">Nom de Groupe :</h4>
                        <h5 >{nomgroupe}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Nombre des Contacts : {list} </li>
                        <li class="list-group-item"><button type="Achat" class="btn btn-success" onClick={onSubmit} ><i class="fa fa-pencil-square" aria-hidden="true"></i> Mise a jour</button> <button type="Achat" class="btn btn-danger" onClick={()=>DeleteHandler(id)} ><i class="fa fa-trash" aria-hidden="true"></i> suprimer</button></li>
                    </ul>
                    </div>
                    <br></br>
                </div>
        
    );
}

export default Rowgroupe;
