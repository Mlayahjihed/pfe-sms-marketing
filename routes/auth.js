const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');
const { ROLES, inRole } = require("../security/rolemiddleware");
// Controllers
const {
    login,
    register,
    forgetPassword,
    resetPassword,
  } = require("../controllers/auth");
  const {
    delprofiles,
    getprofiles,
    getprofile,
    upprofiles
  } = require("../controllers/profiles");
  router.route("/register").post(register);
  
  router.route("/login").post(login);
  
  router.route("/forgetPassword").post(forgetPassword);
  
  router.route("/resetPassword/:resetToken").put(resetPassword);

  router.route("/delprofiles/:id").delete(passport.authenticate('jwt', { session: false }),
  inRole(ROLES.ADMIN),
  delprofiles);
  
  router.route("/upprofile").post(passport.authenticate('jwt', { session: false }),
  upprofiles);

  router.route("/getprofiles").get(passport.authenticate('jwt', { session: false }),
  inRole(ROLES.ADMIN),
  getprofiles);

  router.route("/getprofile").get(passport.authenticate('jwt', { session: false }),
  getprofile);

module.exports = router;