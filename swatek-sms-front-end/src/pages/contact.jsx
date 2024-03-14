import React ,{useState} from 'react';
import Img from './images/contact.jpg'
import Input from './components/Input';
import Textarea from './components/textarea';
import {useDispatch , useSelector} from 'react-redux';
import { Msg } from '../redux/action/msg';

const Contact = () => {
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
       dispatch(Msg(form));
   }

    return (
        <div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 te text-center mb-0">contactez-nous</h3>
                            <h1 className="display-6 text-center mb4">Vous avez des <b> Questions?</b> </h1>
                            <hr className='w-25 mx-auto'></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={Img} alt="contact" className='w-75' />
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={onSubmit}>
                            <Input name="nomprenom" label="nom et prenom :" type="text"onChangeHandler={onChangeHandler} errors={errors.nomprenom}/>

                            <Input name="email" label="E-mail:" type="email" onChangeHandler={onChangeHandler} errors={errors.email}/>

                            <Textarea name="msg" label="Message:"  onChangeHandler={onChangeHandler} errors={errors.msg}/>

                                <button type='submit'className='btn btn-outline-dark'><i className="fa fa-paper-plane ms-2"></i>Envoyer</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
