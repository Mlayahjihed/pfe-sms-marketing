import React,{useState} from 'react';
import Input from '../Input';
import Rowfor from "../Rowfor";
import {useDispatch , useSelector} from 'react-redux';
import { addfor } from '../../../redux/action/forfait';

const Aforfait = () => {
    const [form,setForm]= useState({});
    const dispatch = useDispatch();
const errors = useSelector(state=>state.errors);
    const  onChangeHandler=(e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
   const onSubmit =(e)=>{
       e.preventDefault();
       dispatch(addfor(form));
   }
    return (
        
            <div className="col py-3"  >
                <br></br>
            <form class="mb-3 card container " >
                <br></br>
                <h1> Ajouter Forfait</h1>
                <br></br>
                                <Input name="nompack"  label="Nom de Pack :" type="text" onChangeHandler={onChangeHandler} errors={errors.nompack} />
                                <Input name="prix"  label="Prix :" type="text" onChangeHandler={onChangeHandler} errors={errors.prix}/>
                                <Input name="nbrsms"  label="Nomber d'SMS :" type="text"onChangeHandler={onChangeHandler} errors={errors.nbrsms} />
                                <Input name="validite" label="Validité :" type="Number" min="0" onChangeHandler={onChangeHandler} errors={errors.validite} />
                                <Input name="dateD" label="Date ajout :"  type="datetime-local"  onChangeHandler={onChangeHandler} errors={errors.dateD}  />
                                <Input name="dateF" label="date fin :" type="date" onChangeHandler={onChangeHandler} errors={errors.dateF} />

                                <button type='submit' className='btn btn-outline-dark' onClick={onSubmit}><i className="fa fa-plus"></i> Ajouter</button>
                                <br></br>
                            </form>
        </div>
        
    );
}

export default Aforfait;
