const router = require('express').Router();
const { Post, User } = require('../../models');

router.get('/:id', async (req, res) => {
  // finds a single post by its `id`
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [User]
    });
    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
    const post = postData.get({ plain: true });
    res.render('post', {
      ...post,
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    res.status(500).json(err);
  }

  router.post('/', async (req, res) => {
    try {
      const postData = await Post.create({
        post_title: req.body.post_title,
        post_body: req.body.post_body,
      
      });
  console.log(postData)
      req.session.save(() => {
        res.status(200).json({ user: postData, message: 'Postmates' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  



});
module.exports = router;