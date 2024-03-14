const express = require("express");
const router = express.Router();
// Controllers
const {addfor,
  getforfaits,
  delfor,
  getfor,  
  upfor,
  alldem,
  delach,
  upach,
achat,
getach} = require("../controllers/forfait");
const passport = require("passport");
const jwt = require('jsonwebtoken');
const { ROLES, inRole } = require("../security/rolemiddleware");
  
 

 

  router.route("/addfor").post(passport.authenticate('jwt', { session: false }),
  inRole(ROLES.ADMIN),
  addfor);

  router.route("/allfor").get(
  getforfaits);

  router.route("/delfor/:id").delete(passport.authenticate('jwt', { session: false }),
  inRole(ROLES.ADMIN),
  delfor);

  router.route("/getfor/:id").get(passport.authenticate('jwt', { session: false }),
  inRole(ROLES.ADMIN),
  getfor);
  router.route("/upfor/:id").post(passport.authenticate('jwt', { session: false }),
  inRole(ROLES.ADMIN),
  upfor);
  router.route("/achat/:id").post(passport.authenticate('jwt', { session: false }),
  achat);
  router.route("/demachat").get(passport.authenticate('jwt', { session: false }),
  inRole(ROLES.ADMIN),
  alldem);
  router.route("/delach/:id").delete(passport.authenticate('jwt', { session: false }),
  inRole(ROLES.ADMIN),
  delach);
  router.route("/upachat/:id").post(passport.authenticate('jwt', { session: false }),
  inRole(ROLES.ADMIN),
  upach);
  router.route("/getach").get(passport.authenticate('jwt', { session: false }),
  getach);

module.exports = router;