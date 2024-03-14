const express = require("express");
const router = express.Router();
const passport = require("passport");
const {ajoutcon,allcon, delcon, upcon, addcsv, groupe, allgr, delgr, upgr} = require("../controllers/contact");
const jwt = require('jsonwebtoken');

router.route("/ajoutcon").post(passport.authenticate('jwt', { session: false }),
ajoutcon);
router.route("/allcon").get(passport.authenticate('jwt', { session: false }),
allcon);
router.route("/delcon/:id").delete(passport.authenticate('jwt', { session: false }),
delcon);
router.route("/upcon/:id").post(passport.authenticate('jwt', { session: false }),
upcon);
router.route("/addcsv").post(passport.authenticate('jwt', { session: false }),
addcsv);
router.route("/groupe").post(passport.authenticate('jwt', { session: false }),
groupe);
router.route("/allgroupe").get(passport.authenticate('jwt', { session: false }),
allgr);
router.route("/delgr/:id").delete(passport.authenticate('jwt', { session: false }),
delgr);
router.route("/upgr/:id").post(passport.authenticate('jwt', { session: false }),
upgr);
module.exports = router;