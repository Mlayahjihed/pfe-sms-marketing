import Axios from 'axios';
import { DELETE_Ach,DELETE_FOR, ERRORS, SET_Ach, SET_FOR, SET_FORS,SET_Acha } from '../type';


export const addfor = (form)=>dispatch=>{
    Axios.post('/api/forfait/addfor', form)
    .then(res => {
        window.alert("Forfait ajouté avec succés");
        window.location.reload()
            dispatch({
                type: ERRORS,
                payload: {}
            })
        })
        .catch(err => {
            window.alert("Champs invalides ou forfait deja existe")
            dispatch({
                type: ERRORS,
                payload: err.response.data
            })
        });
}
export const allforfaits = ()=>dispatch=>{
    Axios.get("/api/forfait/allfor")
      .then(res => {
          dispatch({
              type: SET_FORS,
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
export const Deletefor = (id)=>dispatch=>{
    if(window.confirm(" êtes-vous sûr de supprimer cet forfait")){
     Axios
     .delete(`/api/forfait/delfor/${id}`)
     .then(res => {
         dispatch({
             type: DELETE_FOR,
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
 }
 export const Getfor = (id)=>dispatch=>{
    Axios
      .get(`/api/forfait/getfor/${id}`)
      .then(res => {
          dispatch({
              type: SET_FOR,
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
  export const upfor = (form,id)=>dispatch=>{
    Axios.post(`/api/forfait/upfor/${id}`,form)
      .then(res => {
        window.alert('Modification avec succés')
        window.location.reload()
        dispatch({
          type: ERRORS,
          payload: {}
      })
      })
      .catch(err => {
          window.alert("Forfait deja exist ou champs invalides")
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}
export const demande = (form,id)=>dispatch=>{
    if(window.confirm("confirmer demande achat?")){
    Axios.post(`/api/forfait/achat/${id}`,form)
      .then(res => {
        window.alert('demande envoyée avec  succés')
        window.location.reload()
        dispatch({
          type: ERRORS,
          payload: {}
      })
      })
      .catch(err => {
          window.alert("champs invalides ou vous avez déjà une forfait")
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}}
export const allachat = ()=>dispatch=>{
    Axios.get("/api/forfait/demachat")
    .then(res => {
        dispatch({
            type: SET_Ach,
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
export const delach = (id)=>dispatch=>{
    if(window.confirm("êtes-vous sûr de supprimer cet demande?")){
    Axios.delete(`/api/forfait/delach/${id}`)
    .then(res => {
        dispatch({
            type: DELETE_Ach,
            payload: id
        })
    })
    .catch(err => {
        dispatch({
            type: ERRORS,
             payload: err.response.data
        })}
    );
    }  
}
export const upach = (id)=>dispatch=>{
    Axios.post(`/api/forfait/upachat/${id}`)
    .then(res => {
        window.alert('Accepté')
        window.location.reload()
        dispatch({
            type: ERRORS,
            payload: {}
        })
    })
    .catch(err => {
        dispatch({
            type: ERRORS,
             payload: err.response.data
        })
    });
    
}
export const Getach = ()=>dispatch=>{
    Axios
      .get(`/api/forfait/getach`)
      .then(res => {
          dispatch({
              type: SET_Acha,
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