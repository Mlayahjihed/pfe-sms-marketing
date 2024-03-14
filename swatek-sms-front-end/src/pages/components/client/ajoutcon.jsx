import React, { useState } from 'react';
import Input from "../Input";
import Select from '../Select';
import Select2 from '../select2';
import { useDispatch, useSelector } from 'react-redux';
import { addcon } from '../../../redux/action/contact';
import Ajoutconcsv from './ajoutconcsv';


const Ajoutcon = () => {
    const [form, setForm] = useState({});
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors);
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addcon(form));
    }
    return (
        <div className='col py-3 '>

            <br></br>
            <form class='card container' >
                <br></br>
                <h1>Ajouter Contact</h1>
                <br></br>
                <Input name="nom" label="Nom :" type="text" onChangeHandler={onChangeHandler} errors={errors.nom} />
                <Input name="prenom" label="Prenom :" type="text" onChangeHandler={onChangeHandler} errors={errors.prenom} />
                <Input name="age" label="Age :" type="Number" min="0" onChangeHandler={onChangeHandler} errors={errors.age} />
                <Select name="sexe" label="Sexe :" onChangeHandler={onChangeHandler} errors={errors.sexe} />
                <Select2 name="region" label="Région :" onChangeHandler={onChangeHandler} errors={errors.region} />
                <Input name="telephone" label="Télephone :" type="number"   onChangeHandler={onChangeHandler} errors={errors.telephone} />
                <Input name="datenaiss" label="date naissance:" type="date" onChangeHandler={onChangeHandler} errors={errors.datenaiss} />
                <Input name="datedec" label="date décee:" type="date" onChangeHandler={onChangeHandler} errors={errors.datedec} />

                <button type='submit' onClick={onSubmit} className='btn btn-outline-dark' ><i className="fa fa-plus-square"></i>  Ajouter</button>
                <br></br>
            </form>
            <br></br>
            <Ajoutconcsv/>

        </div>
    );
}

export default Ajoutcon;
