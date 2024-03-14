import {SET_sms} from "../type";

const intitialState = {
  sms: [],
 
};
export default function (state = intitialState, action) {
  switch (action.type) {
   
      case SET_sms:
      return {
        ...state,
        sms: action.payload,
      };
      
       
    default:
      return state;
  }
}