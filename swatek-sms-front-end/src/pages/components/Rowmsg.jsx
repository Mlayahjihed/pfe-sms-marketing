import React ,{useState}from 'react';
import Textera from "./textarea";
import { useDispatch , useSelector} from "react-redux";
import { Repodremsg } from "../../redux/action/msg";
const Rowmsg = ({_id, nomprenom , email ,msg2}) => {
    const dispatch =  useDispatch()
    const [form,setForm]= useState({});
    const errors = useSelector(state=>state.errors);
    const  onChangeHandler=(e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const DeleteHandler = async (e)=>{
        e.preventDefault();
        dispatch( await Repodremsg(form,_id,email))
      }
    return (
        
            <div class="card text-center">
                <div class="card-header">
                   Nom et Prénom : {nomprenom}
                </div>
                <div class="card-body">
                    <h5 class="card-title"> Email : {email}</h5>
                    <p class="card-text"> Msg : {msg2}</p>
                    <form onSubmit={DeleteHandler} >
                    <Textera  name="msg" label="votre Réponse:" onChangeHandler={onChangeHandler} errors={errors.msg}/>
                    <button  class="btn btn-outline-dark"  ><i class="fa fa-envelope-o" aria-hidden="true"></i> Répondre</button>
                    </form>
                </div>
                </div>
        
    );
}

export default Rowmsg;
