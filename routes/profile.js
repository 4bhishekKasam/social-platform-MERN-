const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


//load profile and user model
const Profile= require('../models/Profile');
const User= require('../models/User');

router.get("/test", (req, res) => res.json({ msg: "profile route works" }));


module.exports = router;