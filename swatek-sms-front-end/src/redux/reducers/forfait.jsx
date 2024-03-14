import { SET_FOR,SET_FORS,DELETE_FOR} from "../type";

const intitialState = {
  forfaits: [],
  forfait:{},
  
};
export default function (state = intitialState, action) {
  switch (action.type) {
   
      case SET_FORS:
      return {
        ...state,
        forfaits: action.payload,
      };
      case SET_FOR:
      return {
        ...state,
        forfait: action.payload,
      };
      
        case DELETE_FOR:
        return {
          ...state,
          forfaits: state.forfaits.filter(p =>p._id !== action.payload),
        };

    default:
      return state;
  }
}