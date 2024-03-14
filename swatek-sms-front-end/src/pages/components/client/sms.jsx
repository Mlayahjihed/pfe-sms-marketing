import React, { useState, useEffect } from 'react';
import Input from '../Input';
import Textarea from '../textarea';
import { useDispatch, useSelector } from 'react-redux'
import Selectcont from '../selectcont';
import { allgroupes, allcontacts } from '../../../redux/action/contact'
import { sms } from '../../../redux/action/sms'
import Select from 'react-select';
const Sms = () => {
    const [contactss, setValue] = useState({});
    const [groupess, setValues] = useState({});
    const [form, setForm] = useState({});
    const groupes = useSelector(state => state.groupes);
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);
    useEffect(async () => {
        await dispatch(allgroupes())
    }, []);

    var options = [];
    var s = groupes.groupes
    for (let i = 0; i < s.length; i++) {
        options[i] = { label: s[i].nomgroupe, value: s[i].list }
    }
    useEffect(async () => {
        await dispatch(allcontacts())
    }, []);
    var options2 = [];
    var y = contacts.contacts
    for (let i = 0; i < y.length; i++) {
        var m = y[i].nom + ' ' + y[i].prenom + ' ' + y[i].telephone
        options2[i] = { label: m, value: y[i].telephone }
    }
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,

        })

    }
    const onSubmit = async (e) => {
        e.preventDefault();
        if((contactss.length === undefined) && (groupess.length === undefined)){
      window.alert("selectionner minimum un cantact ou groupe")
        }else{
            const x = { form, contactss, groupess}
        await dispatch(sms(x))
        }
        
    }
    


    return (
        <div className="col py-3">
            <br></br>
            <form class='card container' onSubmit={onSubmit} >
                <br></br>
                <h1>Envoyer SMS </h1>
                <br></br>
                <div class="mb-3">
                    <label for="add" class="form-label">Entéte</label>
                    <input required name="entet" maxlength="12" type="text" className="form-control" onChange={onChangeHandler}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Votre SMS :</label>
                    <textarea required name="sms" maxlength="160" className="form-control" onChange={onChangeHandler} ></textarea>
                    
                </div>
                <label for="exampleFormControlTextarea1" class="form-label" > Contacts :</label>
                <Select
                
                    name="contacts"
                    options={options2}
                    value={contactss.value}
                    onChange={setValue}
                    isMulti
                />
                <br></br>
                <label for="exampleFormControlTextarea1" class="form-label" > Groupes :</label>
                <Select
                    name="contacts"
                    options={options}
                    value={groupess.value}
                    onChange={setValues}
                    isMulti

                />
                <br></br>


                <button type='submit'  className='btn btn-outline-dark'><i className="fa fa-paper-plane ms-2"></i> Envoyer</button>
                <br></br>
            </form>
        </div>
    );
}

export default Sms;
