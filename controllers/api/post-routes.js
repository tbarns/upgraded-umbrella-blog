const router = require('express').Router();
const { Post, User } = require('../../models');

router.get('/:id', async (req, res) => {
    // finds a single post by its `id`
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [User]
      });
  console.log(postData)
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
      res.render('homepage', {
        postData,
        loggedIn: req.session.loggedIn,
    });
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  
  });
  module.exports = router;