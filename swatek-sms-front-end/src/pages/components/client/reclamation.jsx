import React ,{useState} from 'react';
import Textarea from "../textarea";
import {useDispatch , useSelector} from 'react-redux';
import { Msg2 } from '../../../redux/action/msg';
const Reclamation = () => {
    const [form,setForm]= useState({});
    const dispatch = useDispatch();
    const  onChangeHandler=(e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
   const onSubmit =(e)=>{
       e.preventDefault();
       dispatch(Msg2(form));
   }
    return (
        <div className="col py-3">
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>

            <form class='card container '  onSubmit={onSubmit}>
            <br></br>
            <div className="col-12">
                            <h3 className="fs-5 te text-center mb-0">contactez-nous</h3>
                            <h1 className="display-6 text-center mb4">Vous avez des <b> Questions?</b> </h1>
                            <hr className='w-25 mx-auto'></hr>
                        </div>
            <br></br>
            <Textarea name="msg" label="Message:" onChangeHandler={onChangeHandler} />
            <br></br>
            <button type='submit'className='btn btn-outline-dark'><i className="fa fa-paper-plane ms-2"></i> Envoyer</button>
            <br></br>
            </form>
        </div>
    );
}

export default Reclamation;
