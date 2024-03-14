import React ,{useEffect,useState}from 'react';
import Input from './components/Input';
import {useDispatch , useSelector} from 'react-redux';
import { AddProfile } from '../redux/action/profile';
import { GetProfile } from '../redux/action/profile';
const Profile = () => {
    const [form, setForm] = useState({})
  const dispatch = useDispatch()
  const errors = useSelector(state=>state.errors)
  const profiles = useSelector(state=>state.profiles)
  const onChangeHandler = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e)=>{
  e.preventDefault();
  dispatch(AddProfile(form))
  }

  useEffect(async ()=>{
    await dispatch(GetProfile())
    setForm(profiles.profile)
   },[])
    return (
        <div className="col py-3" onSubmit={onSubmit}>
          <br></br>
          <br></br>
          <br></br>
            <form class="mb-3 card container " >
            <br></br><h1> Gérer Profil</h1>
            <br></br>
                <Input name="nomprenom" value={form.nomprenom} label="nom et prenom :" type="text" onChangeHandler={onChangeHandler} errors={errors.nomprenom}/>
                <Input name="telephone" value={form.telephone} label="télephone :" type="tel" onChangeHandler={onChangeHandler} errors={errors.telephone}/>
                <Input name="adress" value={form.adress} label="Adresse :" type="tel" onChangeHandler={onChangeHandler} errors={errors.adress}/>
                <Input name="socite" value={form.socite} label="Société :" type="text" onChangeHandler={onChangeHandler} errors={errors.socite} />
                <Input name="email" value={form.email} label="E-mail:" type="email" onChangeHandler={onChangeHandler} errors={errors.email}/>
               

                <button type='submit' className='btn btn-outline-dark'><i class="fa fa-pencil-square-o" ></i> Modifier</button>
          <br></br>  
          </form>
        </div>
    );
}

export default Profile;
