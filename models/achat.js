const mongoose =require('mongoose');
const Schema = mongoose.Schema;

//msg schema or document structure
const achat = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
      
      },
      forfait: {
        type: Schema.Types.ObjectId,
        ref: "forfaits",
        required: true
      },
      nbrsms:{
          type : Number,
      },
      dateachat:{
        type : Date
    },
    datefin:{
        type : Date
    },
    etat:{
      type : String,
      default : "En attend",
  },
  paiment:{
    type : String,
   
},
   
     

})




const achats = new mongoose.model("achat",achat);
module.exports = achats;