const { Post } = require('../models');

const postData = [
    {
        post_title: 'Winter Home',
       post_body: 'I am going south for the winter',
      user_id: 1,
      
      },

      {
        post_title: 'I made a zillion dollars on bitcoin',
       post_body: 'Send me your banking info and you can too',
      user_id: 2,
      
      },

      {
        post_title: 'Everyone knows',
       post_body: 'RuPauls DragRace Italia is best iteration of the franchise yet',
      user_id: 3,
      
      },

      {
        post_title: 'Heroku is dead',
       post_body: 'first its free.  Now its not! What a mess.',
      user_id: 1,
      
      },




];
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
