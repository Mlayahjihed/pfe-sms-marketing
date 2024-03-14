import { SET_dash, SET_dash2, SET_dash3} from "../type";

const intitialState = {
  dashs: [],
  dash: {},
  dash2: {},
  dash3: {},
};
export default function (state = intitialState, action) {
  switch (action.type) {
    case SET_dash:
      return {
        ...state,
        dash: action.payload,
      };
      case SET_dash2:
      return {
        ...state,
        dash2: action.payload,
      };
      case SET_dash3:
      return {
        ...state,
        dash3: action.payload,
      };
    default:
      return state;
  }
}