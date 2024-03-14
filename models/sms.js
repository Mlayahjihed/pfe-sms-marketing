const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//msg schema or document structure
const sms = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    entet: {
        type: String,
        

    },
    sms: {
        type: String,
        

    },

    destinataire: {
        type: [],
    },
    dateenv: {
       type : Date,
       default :Date.now()
    },


})




const smss = new mongoose.model("sms", sms);
module.exports = smss;