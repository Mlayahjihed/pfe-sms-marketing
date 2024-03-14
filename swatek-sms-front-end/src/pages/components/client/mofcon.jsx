import React ,{useEffect,useState}from 'react';
import {useDispatch , useSelector} from 'react-redux';
import Input from '../Input';
import Select from '../Select';
import Select2 from '../select2';
import { upcon } from '../../../redux/action/contact';
const Mofcon = ({id ,nom, prenom, age,telephone,datenaiss,datedec }) => {
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
        dispatch(upcon(form,id))
        }

    useEffect(()=>{
       
        setForm({
          ...form,
          ["nom"]: nom,
          ["prenom"]: prenom,
          ["age"]: age,
          ["telephone"]: telephone,
          ["datenaiss"]: datenaiss.split('T')[0],
          ["datedec"]: datedec.split('T')[0],

        })
       },[])
    return (
        <div className="col py-3"  >
       <form  >
                                <Input value={form.nom}name="nom"  label="Nom :" type="text"  onChangeHandler={onChangeHandler} errors={errors.nom}  />
                                <Input name="prenom" value={form.prenom} label="Prenom :" type="text" onChangeHandler={onChangeHandler} errors={errors.prenom}  />
                                <Input name="age"  value={form.age} label="Age :" type="Number" min="0" onChangeHandler={onChangeHandler} errors={errors.age} />
                                <Select name="sexe" label="Sexe :" value={form.sexe} onChangeHandler={onChangeHandler} errors={errors.sexe}/>
                                <Select2 name="region" label="Région :" type="text" onChangeHandler={onChangeHandler} errors={errors.region} />
                                <Input name="telephone" value={form.telephone} label="Télephone :" type="text"  onChangeHandler={onChangeHandler} errors={errors.telephone} />
                                <Input name="datenaiss" value={form.datenaiss} label="date naissance :" type="date"  onChangeHandler={onChangeHandler} errors={errors.datenaiss} />
                                <Input name="datedec" value={form.datedec} label="date decee :" type="date"  onChangeHandler={onChangeHandler} errors={errors.datedec} />
                                <button type='submit' onClick={onSubmit}  className='btn btn-outline-dark' ><i className="fa fa-pencil-square-o"></i>Modifier</button>
                            </form>
    </div>
    );
}

export default Mofcon;
