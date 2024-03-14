import axios from 'axios'

import { ERRORS,SET_PROFILE,SET_PROFILES,DELETE_PROFILE } from '../type';

export const AddProfile = (form)=>dispatch=>{
    axios.post("/api/auth/upprofile", form)
      .then(res => {
        window.alert('Modification avec succés')
        dispatch({
          type: ERRORS,
          payload: {}
      })
      })
      .catch(err => {
          window.alert(" E-mail deja exist ou champs invalides")
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}
export const GetProfile = ()=>dispatch=>{
  axios
    .get("/api/auth/getprofile")
    .then(res => {
        dispatch({
            type: SET_PROFILE,
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
export const GetProfiles = ()=>dispatch=>{
    axios.get("/api/auth/getprofiles")
      .then(res => {
          dispatch({
              type: SET_PROFILES,
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
export const DeleteProfile = (id)=>dispatch=>{
    if(window.confirm("êtes-vous sûr de supprimer cet utilisateur?")){
     axios
     .delete(`/api/auth/delprofiles/${id}`)
     .then(res => {
         dispatch({
             type: DELETE_PROFILE,
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