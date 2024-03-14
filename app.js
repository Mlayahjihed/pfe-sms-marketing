//import all dependencies
const dotenv = require("dotenv");
const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();
const errorHandler =require('./middleware/error');
const passport =require ('passport');
//config env file and require connection file
dotenv.config({ path: "./config/.env" });
require('./config/conn');
app.use(express.json());


/* passport */
app.use(passport.initialize()),
require('./security/passport')(passport);
//api auth
app.use("/api/auth", require("./routes/auth"));
// api msg 
app.use("/api/msg", require("./routes/msg"));
//api forfait
app.use("/api/forfait", require("./routes/forfait"));
//api contact
app.use("/api/contact", require("./routes/contact"));
//dashbord
app.use("/api/dashbord", require("./routes/dashbord"));
//sms
app.use("/api/sms", require("./routes/sms"));
//smsplanifer
app.use("/api/planifie", require("./routes/planifiesms"));

//smsplanifer
app.use("/api/dash2", require("./routes/dashbord2"));

app.use("/api/private", require("./routes/private"));
//eroor handler (middlewahre)
app.use(errorHandler);

const Port = process.env.PORT;
app.get('/', (req, res) => {
    res.send("hello world");
  });

app.listen(Port, () => {
    console.log("serveur is listening",Port);
  });

  