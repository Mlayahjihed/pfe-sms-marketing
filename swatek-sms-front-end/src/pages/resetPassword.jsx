import Input from './components/Input';
import React,{useState} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { ResetP } from '../redux/action/authaction';
import {useParams } from 'react-router-dom';
const Resetpassword = () => {
    const params = useParams();
    const match=params.passwordreset ;
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
       dispatch(ResetP(form,match));
   }
    return (
        <div className="container shadow my-5  col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
           <form onSubmit={onSubmit} >
                                <Input name="password" label="Nouveau mot de passe :" type="password" onChangeHandler={onChangeHandler} errors={errors.password} />
                                <Input name="confirme" label="Confirmer mot de passe:" type="password" onChangeHandler={onChangeHandler}errors={errors.confirme}/>

                                <button type='submit' class='btn btn-light btn-outline-dark'>Modifier</button>
                            </form> 
        </div>
    );
}

export default Resetpassword;
