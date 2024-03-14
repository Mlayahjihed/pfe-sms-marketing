import Auth from './auth';
import Errors from './errors';
import { combineReducers } from "redux";
import  profile  from "./profile";
import  msg  from "./msg";
import  forfait  from "./forfait";
import achat from "./achat";
import contact from "./contact";
import groupe from "./groupe";
import dash from "./dash";
import sms from "./sms";
import info from "./dash2";
export default combineReducers ({
    auth: Auth ,
    errors : Errors,
    profiles: profile,
    msgs:msg,
    forfaits :forfait,
    achats: achat,
    contacts :contact,
    groupes :groupe,
    dashs:dash,
    sms:sms,
    info : info,
    
});