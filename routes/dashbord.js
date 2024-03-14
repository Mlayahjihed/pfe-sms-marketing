const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');
const { dash,dash2, dash3, dashachatA, dashachatE, dashforfait, dashpack } = require("../controllers/dashbord");
router.route("/dash").get(passport.authenticate('jwt', { session: false }),
dash);
router.route("/dash2").get(passport.authenticate('jwt', { session: false }),
dash2);
router.route("/dash3").get(passport.authenticate('jwt', { session: false }),
dash3);
router.route("/dashachatA").get(passport.authenticate('jwt', { session: false }),
dashachatA);
router.route("/dashachatE").get(passport.authenticate('jwt', { session: false }),
dashachatE);
router.route("/dashforfait").get(passport.authenticate('jwt', { session: false }),
dashforfait);
router.route("/dashpack").get(passport.authenticate('jwt', { session: false }),
dashpack);
module.exports = router;