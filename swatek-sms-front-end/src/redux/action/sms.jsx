
import axios from 'axios'

import { ERRORS, SET_sms} from '../type';

export const sms = (x)=>dispatch=>{
   axios.post("/api/sms/sms", x)
      .then(res => {
        window.alert('sms envoyer')
        window.location.reload()
        dispatch({
          type: ERRORS,
          payload: {}
      })
      })
      .catch(err => {
          window.alert(err)
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
})}
export const planifie = (y)=>dispatch=>{
  axios.post("/api/planifie/planifie", y)
     .then(res => {

       window.alert('sms planifié avec succés')
       window.location.reload()
       dispatch({
         type: ERRORS,
         payload: {}
     })
     })
     .catch(err => {
         window.alert("Forfait Epouisé ")
         dispatch({
             type: ERRORS,
             payload: err.response.data
         })
})}
export const Gethis = ()=>dispatch=>{
  axios.get("/api/sms/Historique")
    .then(res => {
        dispatch({
            type: SET_sms,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    });
}