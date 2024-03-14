const mongoose =require("mongoose");

const db= process.env.DATEBASE;

 mongoose.connect(db,{
     useNewUrlParser: true,
     useUnifiedTopology :true 
 }).then(()=>{
     console.log("connection succe");
 }).catch((e)=>{
     console.log(e);
 })
 