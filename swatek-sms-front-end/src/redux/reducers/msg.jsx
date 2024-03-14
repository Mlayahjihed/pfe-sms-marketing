import { SET_MSGS,DELETE_MSGS} from "../type";

const intitialState = {
  msgs: [],
  msg:{},
  
};
export default function (state = intitialState, action) {
  switch (action.type) {
   
      case SET_MSGS:
      return {
        ...state,
        msgs: action.payload,
      };
      
        case DELETE_MSGS:
        return {
          ...state,
          msgs: state.msgs.filter(p =>p._id !== action.payload),
        };

    default:
      return state;
  }
}