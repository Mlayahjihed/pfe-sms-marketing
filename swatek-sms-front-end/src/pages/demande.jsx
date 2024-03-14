import React,{useState} from 'react';
import Img from './images/dem.png'
import Input from './components/Input';
import {useDispatch , useSelector} from 'react-redux';
import { Registration } from '../redux/action/authaction';
import {useNavigate} from 'react-router-dom';
const Demande = () => {
    const [form,setForm]= useState({});
    const dispatch = useDispatch();
    const navigate =useNavigate();
const errors = useSelector(state=>state.errors);
    const  onChangeHandler=(e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
   const onSubmit =(e)=>{
       e.preventDefault();
       dispatch(Registration(form,navigate));
   }
    return (
        <div>
            <section id="demande">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 te text-center mb-0">S'inscrire</h3>
                            <h1 className="display-6 text-center mb4">Formulaire <b>création</b> de compte Client </h1>
                            <hr className='w-25 mx-auto'></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={Img} alt="contact" className='w-75' />
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={onSubmit} >
                                <Input name="nomprenom" label="Nom et Prénom :" type="text" onChangeHandler={onChangeHandler} errors={errors.nomprenom}/>
                                <Input name="telephone" label="Télephone :" type="Number" onChangeHandler={onChangeHandler} errors={errors.telephone}/>
                                <Input name="adress" label="Adresse :" type="tel" onChangeHandler={onChangeHandler} errors={errors.adress}/>
                                <Input name="socite" label="Société :" type="text" onChangeHandler={onChangeHandler} errors={errors.socite}/>
                                <Input name="email" label="E-mail:" type="email" onChangeHandler={onChangeHandler} errors={errors.email}/>
                                <Input name="password" label="Mot De Passe :" type="password" onChangeHandler={onChangeHandler} errors={errors.password} />
                                <Input name="confirme" label="Confirmer Mot De Passe:" type="password" onChangeHandler={onChangeHandler}errors={errors.confirme}/>

                                <button type='submit' className='btn btn-outline-dark'><i className="fa fa-paper-plane ms-2"></i>Créer compte</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Demande;
