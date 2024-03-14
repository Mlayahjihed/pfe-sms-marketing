
import Input from '../Input';
import Select from '../Select';
import Select2 from '../select2';
import Select3 from '../select3';
import Allgroupe from './allgroupe';
import React ,{useState}from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { addgroupe} from "../../../redux/action/contact";
const Groupe = () => {
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
        dispatch(addgroupe(form))
        }
    return (
        <div className="col py-3">
            <br></br>
            <br></br>
            <br></br>
            <form class='card container' >
                <br></br>
                <h1>Creation De Groupe</h1>
                <br></br>
                <Input name="nomgroupe" label="Nom De Groupe :" type="text" onChangeHandler={onChangeHandler} errors={errors.nomgroupe}   />
                <Select name="sexe" label="Sexe :" onChangeHandler={onChangeHandler} />
                <Select2 name="region" label="Région :" onChangeHandler={onChangeHandler} />
                <Select3 name="age" label="Age :"  onChangeHandler={onChangeHandler} errors={errors.age} />
                <button type='submit' onClick={onSubmit}  className='btn btn-outline-dark' ><i className="fa fa-plus-square"></i>  Crée Groupe</button>
                <br></br>
            </form>
            <br></br>
            <br></br>
            <div className="col-12">

                        <h1 className="display-6 text-center mb4"> Groupes</h1>
                        <hr className='w-25 mx-auto'></hr>
                    </div>
            <Allgroupe/>

        </div>
    );
}

export default Groupe;
