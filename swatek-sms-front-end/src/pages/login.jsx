import React,{useState} from 'react';
import { Link } from "react-router-dom";
import Input from './components/Input';
import {useDispatch , useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { LoginAction } from '../redux/action/authaction';
const Login = () => {
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
       dispatch(LoginAction(form,navigate));

   }
    return (
        <div    >
            <br></br>
            <br></br>
            <br></br>

            <br></br>

            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
                        <h1 className="display-4 fw-bolder">Bienvenue</h1>
                        <p className="lead text-center">Connecter a votre compte Client </p>
                        <h5 className='mb-4'> OU</h5>
                        <Link  className="btn btn-outline-light rounded-pill px-4 py-2 " to="/Demande"> S'inscrire</Link>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">Connexion</h1>
                        <form onSubmit={onSubmit}>
                        <Input name="email" label="E-mail:" type="email"onChangeHandler={onChangeHandler} errors={errors.email}/>
                        <Input name="password" label="Mot De Passe :" type="password"onChangeHandler={onChangeHandler} errors={errors.password}/>
                            <div>
                            <Link className="text-dark" to="/forget">Mot De Passe Oublié??</Link>
                            </div>
                            <br></br>
                            <div>
                            <button type="submit" class="btn btn-outline-dark">Connexion</button></div>
                        </form>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default Login;
