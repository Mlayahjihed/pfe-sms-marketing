import Axios from 'axios';
import { ERRORS,SET_USER } from '../type';
import jwtdecode from "jwt-decode";
import {setAuth} from'../../pages/setauth';

export const Forgett = (form)=>dispatch=>{
    Axios.post('/api/auth/forgetPassword', form) 
    .then(res=>{
     window.alert("Consulter Votre boite mail !")
      dispatch({
          type: ERRORS,
          payload: {}
      })
    })
    .catch(err=>{
        window.alert("E-mail n'existe pas")
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
}
export const ResetP = (form,Match)=>dispatch=>{
    Axios.put(`/api/auth/resetPassword/${Match}`, form) 
    .then(res=>{
      
     window.alert("Mot de passe modifié avec succés")
      dispatch({
          type: ERRORS,
          payload: {}
      })
    })
    .catch(err=>{
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
}
export const Registration = (form, navigate)=>dispatch=>{
    Axios.post('/api/auth/register', form) 
    .then(res=>{
     navigate('/login')
      dispatch({
          type: ERRORS,
          payload: {}
      })
    })
    .catch(err=>{
        window.alert("E-mail deja utilisé Ou champs non valide"); 
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
}

export const LoginAction = (form)=>dispatch=>{
    Axios.post('/api/auth/login', form) 
    .then(res=>{
        
      const {token} = res.data;
      localStorage.setItem('jwt', token);
      setAuth(token);
      const decode = jwtdecode(token);
      dispatch(setUser(decode));
      
      
    })
    .catch(err=>{
        window.alert('cordonnées invalides')
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
}
export const Logout = ()=>dispatch=>{
    localStorage.removeItem('jwt')
    dispatch({
        type: SET_USER,
        payload: {}
    })
}
export const setUser = (decode)=>({
    type: SET_USER,
    payload: decode
})
