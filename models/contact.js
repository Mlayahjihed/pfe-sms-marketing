const mongoose =require('mongoose');
const Schema = mongoose.Schema;

//msg schema or document structure
const contact = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
        
      },
      nom:{
          type : String,
      },
      prenom:{
        type : String,
    },
      telephone:{
        type : String,
       
    },
    sexe:{
        type : String
    },
    age:{
      type : String
  },
  region:{
    type : String
},
datenaiss:{
  type : Date
},
datedec:{
  type : Date
},
     

})




const contacts = new mongoose.model("contact",contact);
module.exports = contacts;