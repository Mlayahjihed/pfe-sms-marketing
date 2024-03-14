import Input from './components/Input';
import {useDispatch , useSelector} from 'react-redux';
import { Forgett } from '../redux/action/authaction';
import React,{useState} from 'react';

const Forget = () => {
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
       dispatch(Forgett(form));

   }
    return (
        <div className="container shadow my-5  col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
            <form onSubmit={onSubmit} >
            <h1 className="display-4 fw-bolder text-center ">Réinitialiser Mot De Passe  </h1>

            <Input name="email" label="E-mail:" type="email" onChangeHandler={onChangeHandler} errors={errors.email}/>

            <button type="submit" class="btn btn-light btn-outline-dark">Envoyer</button>
            </form>
        </div>
    );
}

export default Forget;
