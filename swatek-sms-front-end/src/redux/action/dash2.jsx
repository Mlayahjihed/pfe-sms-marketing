import Axios from 'axios';
import { ERRORS,SET_accepter, SET_enatt, SET_pack, SET_packyear, SET_prixt, SET_smss } from '../type';

export const prix = ()=>dispatch=>{
    Axios.get("/api/dashbord/dashforfait")
    .then(res => {
        dispatch({
            type: SET_prixt,
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
export const accepter= ()=>dispatch=>{
    Axios.get("/api/dashbord/dashachatA")
    .then(res => {
        dispatch({
            type: SET_accepter,
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
export const enatt = ()=>dispatch=>{
    Axios.get("/api/dashbord/dashachatE")
    .then(res => {
        dispatch({
            type: SET_enatt,
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
export const dashpack = ()=>dispatch=>{
    Axios.get("/api/dashbord/dashpack")
    .then(res => {
        dispatch({
            type: SET_pack,
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
export const dashpacky = ()=>dispatch=>{
    Axios.get("/api/dash2/dash")
    .then(res => {
        dispatch({
            type: SET_packyear,
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
export const dashsms = ()=>dispatch=>{
    Axios.get("/api/dash2/dash2")
    .then(res => {
        dispatch({
            type: SET_smss,
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