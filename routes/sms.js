const express = require("express");
const router = express.Router();
// Controllers
const {sms, Historique} = require("../controllers/sms");
  const passport = require("passport");
  const jwt = require('jsonwebtoken');
  const { ROLES, inRole } = require("../security/rolemiddleware");
  router.route("/sms").post(passport.authenticate('jwt', { session: false }),
  sms);
  router.route("/Historique").get(passport.authenticate('jwt', { session: false }),
  Historique);


  module.exports = router;