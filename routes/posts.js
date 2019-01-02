const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
//Post and Profile model
const Post = require("../models/Post");
const Profile = require("../models/Profile");

//validation
const validatePostInput = require("../validation/post");

router.get("/test", (req, res) => res.json("post route works"));

//get - api/posts ***public
//Get posts
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json("No posts found"));
});

//get - api/posts/:id ***public
//Get posts by id
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      if (post) {
        res.json(post);
      } else {
        res.status(404).json("No posts found with that id");
      }
    })
    .catch(err => res.status(404).json("No posts found with that id"));
});

//post - api/posts/ ***private
//create post
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      user: req.body.user,
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar
    });
    newPost.save().then(post => res.json(post));
  }
);

module.exports = router;
