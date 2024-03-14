import Axios from 'axios';
import { DELETE_Con, DELETE_gr, ERRORS, SET_Con, SET_gr } from '../type';
export const addcon = (form)=>dispatch=>{
    Axios.post('/api/contact/ajoutcon', form)
    .then(res => {
        window.alert("Contact ajouté avec succés");
        window.location.reload()
            dispatch({
                type: ERRORS,
                payload: {}
            })
        })
        .catch(err => {
            window.alert("champs vide ou numéro deja existe")
            dispatch({
                type: ERRORS,
                payload: err.response.data
            })
        });
}
export const allcontacts = ()=>dispatch=>{
    Axios.get("/api/contact/allcon")
    .then(res => {
        dispatch({
            type: SET_Con,
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
export const Deletecon = (id)=>dispatch=>{
    if(window.confirm(" supp oui ou nn")){
     Axios
     .delete(`/api/contact/delcon/${id}`)
     .then(res => {
         dispatch({
             type: DELETE_Con,
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
 export const upcon = (form,id)=>dispatch=>{
    Axios.post(`/api/contact/upcon/${id}`,form)
      .then(res => {
        window.alert('modification avec succes')
        window.location.reload()
        dispatch({
          type: ERRORS,
          payload: {}
      })
      })
      .catch(err => {
          window.alert("error champs ou telephone deja exist!")
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}
export const addcsv = (form)=>dispatch=>{
    Axios.post(`/api/contact/addcsv`,form)
    .then(res => {
        window.alert("Contact ajouté avec succés");
        window.location.reload()
            dispatch({
                type: ERRORS,
                payload: {}
            })
        })
        .catch(err => {
            window.alert("Probléme De Téléchargement")
            dispatch({
                type: ERRORS,
                payload: err.response.data
            })
        });
}
export const addgroupe = (form)=>dispatch=>{
    Axios.post(`/api/contact/groupe`,form)
    .then(res => {
        window.alert("groupe ajouté avec succés");
        window.location.reload()
            dispatch({
                type: ERRORS,
                payload: {}
            })
        })
        .catch(err => {
            window.alert(" champs vide ou nom de groupe deja existe ")
            dispatch({
                type: ERRORS,
                payload: err.response.data
            })
        });
}
export const allgroupes = ()=>dispatch=>{
    Axios.get("/api/contact/allgroupe")
    .then(res => {
        dispatch({
            type: SET_gr,
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
export const Deletegr = (id)=>dispatch=>{
    if(window.confirm(" êtes-vous sûr de supprimer cet groupe ?")){
     Axios
     .delete(`/api/contact/delgr/${id}`)
     .then(res => {
         dispatch({
             type: DELETE_gr,
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
 export const upgr = (id)=>dispatch=>{
    Axios.post(`/api/contact/upgr/${id}`)
      .then(res => {
        window.alert('modification avec succes')
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