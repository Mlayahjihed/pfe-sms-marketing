import React ,{useEffect,useState}from 'react';
import {useDispatch , useSelector} from 'react-redux';
import Input from '../Input';
import { upfor } from '../../../redux/action/forfait';
const Modforfait = ({id,nompack, prix, nbrsms, validite}) => {
    
    const [form, setForm] = useState({})
    const dispatch = useDispatch()
    const errors = useSelector(state=>state.errors)
    const onChangeHandler = (e)=>{
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }
  
    const onSubmit = (e)=>{
    e.preventDefault();
    dispatch(upfor(form,id))
    }
  
    useEffect(()=>{
       
      setForm({
        ...form,
        ["nompack"]: nompack,
        ["prix"]: prix,
        ["nbrsms"]: nbrsms,
       
        ["validite"]: validite,
      })
     },[])
    return (
        
        <div className="col py-3"  >
        <form  >
                            <Input name="nompack" value={form.nompack} label="Nom de Pack :" type="text" onChangeHandler={onChangeHandler} errors={errors.nompack} />
                            <Input name="prix" value={form.prix} label="Prix :" type="number" min="0" onChangeHandler={onChangeHandler} errors={errors.prix}/>
                            <Input name="nbrsms" value={form.nbrsms} label="Nomber d'SMS :" type="text" onChangeHandler={onChangeHandler} errors={errors.nbrsms} />
                            <Input name="validite" value={form.validite} label="Validité :" type="text"onChangeHandler={onChangeHandler} errors={errors.validite} />

                            <button type='submit' className='btn btn-outline-dark' onClick={onSubmit}><i className="fa fa-paper-plane ms-2"></i>Modifier</button>
                        </form>
    </div>
    
);
}

export default Modforfait;
