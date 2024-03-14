import Axios from 'axios';

import { ERRORS,SET_MSGS,DELETE_MSGS} from '../type';

export const Msg = (form)=>dispatch=>{
    Axios.post('/api/msg/msg', form) 
    .then(res=>{
        window.alert("Réclamation envoyée avec succés");
        window.location.reload()
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

export const Getmsgs = ()=>dispatch=>{
    Axios.get("/api/msg/allmsg")
    .then(res => {
        dispatch({
            type: SET_MSGS,
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

export const Repodremsg = (form,id,email)=>dispatch=>{
     Axios.delete(`/api/msg/delmsg/${id}/${email}/${form.msg}`)
     .then(res => {
         window.alert("E-mail envoyé")
         dispatch({
             type: DELETE_MSGS,
             payload: id
         })
     })
     .catch(err => {
         dispatch({
             type: ERRORS,
             payload: err.response.data
         })
     });
    
 }
 export const Msg2 = (form)=>dispatch=>{
    Axios.post('/api/msg/msg2', form) 
    .then(res=>{
        window.alert("Réclamation envoyée avec succés");
        window.location.reload()
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
