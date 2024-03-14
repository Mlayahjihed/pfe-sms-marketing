import { SET_Ach,DELETE_Ach, SET_Acha} from "../type";

const intitialState = {
  achats: [],
  achat:{},
  achat2:{},
};
export default function (state = intitialState, action) {
  switch (action.type) {
   
      case SET_Ach:
      return {
        ...state,
        achats: action.payload,
      };
      case SET_Acha:
      return {
        ...state,
        achat2: action.payload,
      };
      
      case DELETE_Ach:
        return {
          ...state,
          achats: state.achats.filter(p =>p._id !== action.payload),
        };
     

    default:
      return state;
  }
}