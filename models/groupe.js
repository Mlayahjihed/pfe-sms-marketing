const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//msg schema or document structure
const groupe = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    nomgroupe: {
        type: String,
        

    },
    sexe: {
        type: String,
        default: ""
    },
    age: {
        type: String,
        default: ""
    },
    region: {
        type: String,
        default: ""
    },
    list: {
        type: [],
    },


})




const groupes = new mongoose.model("groupe", groupe);
module.exports = groupes;