import React ,{useState}from 'react';
import {useDispatch, useSelector } from 'react-redux';
import Input from '../Input';
import {demande} from "../../../redux/action/forfait";
import Selectpay from '../selectpay';
const Demandeachat = ({id,nompack, prix, nbrsms, nbrentet, validite}) => {
    const [form, setForm] = useState({})
    const errors = useSelector(state=>state.errors)
    const dispatch = useDispatch()
    const onChangeHandler = (e)=>{
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
      }
      const onSubmit = (e)=>{
        e.preventDefault();
        dispatch(demande(form,id))
        }
    return (
        <div className="col py-3"  >
        <form  >
                           <h5> {nompack}</h5>
                           <h5>Prix : {prix} Dt</h5>
                           <h5>Nombre d'SMS : {nbrsms}</h5>
                           <h5>Validité : {validite} Mois</h5>                           
<Selectpay name="paiment" label="Mode De Paiement" onChangeHandler={onChangeHandler}errors={errors.paiment}/>
                            <button type='submit' className='btn btn-outline-dark' onClick={onSubmit}><i className="fa fa-paper-plane ms-2"></i>Commender</button>
                        </form>
    </div>
    );
}

export default Demandeachat;
