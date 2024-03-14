import { SET_packyear,SET_accepter, SET_enatt, SET_pack, SET_prixt, SET_smss } from "../type";

const intitialState = {
  accepter:[],
  Enatt :[],
  totaleprix:[],
  pack:[],
  packy:[],
  sms:[]
};
export default function (state = intitialState, action) {
  switch (action.type) {
    case SET_accepter:
      return {
        ...state,
        accepter: action.payload,
      };
      case SET_enatt:
      return {
        ...state,
        Enatt: action.payload,
      };
      case SET_prixt:
      return {
        ...state,
        totaleprix: action.payload,
      };
      case SET_pack:
      return {
        ...state,
        pack: action.payload,
      };
      case SET_packyear:
        return {
          ...state,
          packy: action.payload,
        };
        case SET_smss:
        return {
          ...state,
          sms: action.payload,
        };
    default:
      return state;
  }
}