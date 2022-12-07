const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

//GET all from homepage
router.get('/',  async (req, res) => {

    try {
        const socialData = await Post.findAll({
            include: [User]
            
        })
        const socialPost = socialData.map((post) =>
            post.get({ plain: true })
        );
console.log(socialPost)
        res.render('homepage', {
            socialPost,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});



  router.get('/login', async (req, res) => {
    try {
      res.render('login');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });















module.exports = router;
