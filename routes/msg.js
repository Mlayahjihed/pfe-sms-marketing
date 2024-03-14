const express = require("express");
const router = express.Router();
// Controllers
const {delmsg,
  Allmsg,
    Msg,
  Msg2} = require("../controllers/reclamation");
const passport = require("passport");
const jwt = require('jsonwebtoken');
const { ROLES, inRole } = require("../security/rolemiddleware");
  
 

  router.route("/msg").post(Msg);

  router.route("/allmsg").get(passport.authenticate('jwt', { session: false }),
  inRole(ROLES.ADMIN),
  Allmsg);
  router.route("/delmsg/:id/:email/:msg").delete(passport.authenticate('jwt', { session: false }),
  inRole(ROLES.ADMIN),
  delmsg);
  router.route("/msg2").post(passport.authenticate('jwt', { session: false }),Msg2);
 


 

module.exports = router;