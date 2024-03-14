const mongoose =require('mongoose');


//msg schema or document structure
const reclamation = new mongoose.Schema({
    nomprenom:{
        type : String,
        required :true 
    },
    email:{
        type : String,
        required :true ,
    },
    msg:{type : String,
        required :true 

    }

})




const Msg = new mongoose.model("reclamation",reclamation);
module.exports = Msg;