import { SET_gr,DELETE_gr} from "../type";

const intitialState = {
 groupes: [],
  groupe:{},
  
};
export default function (state = intitialState, action) {
  switch (action.type) {
   
      case SET_gr:
      return {
        ...state,
        groupes: action.payload,
      };
      
      
        case DELETE_gr:
        return {
          ...state,
          groupes: state.groupes.filter(p =>p._id !== action.payload),
        };

    default:
      return state;
  }
}