import { SET_Con,DELETE_Con} from "../type";

const intitialState = {
  contacts: [],
  contact:{},
  
};
export default function (state = intitialState, action) {
  switch (action.type) {
   
      case SET_Con:
      return {
        ...state,
        contacts: action.payload,
      };
      
      case DELETE_Con:
        return {
          ...state,
          contacts: state.contacts.filter(p =>p._id !== action.payload),
        };
     

    default:
      return state;
  }
}