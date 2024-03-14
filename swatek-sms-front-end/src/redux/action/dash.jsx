import Axios from 'axios';
import { SET_dash ,ERRORS, SET_dash2, SET_dash3} from '../type';

export const dash = ()=>dispatch=>{
    Axios.get("/api/dashbord/dash")
    .then(res => {
        dispatch({
            type: SET_dash,
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
export const dash2 = ()=>dispatch=>{
    Axios.get("/api/dashbord/dash2")
    .then(res => {
        dispatch({
            type: SET_dash2,
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
export const dash3 = ()=>dispatch=>{
    Axios.get("/api/dashbord/dash3")
    .then(res => {
        dispatch({
            type: SET_dash3,
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