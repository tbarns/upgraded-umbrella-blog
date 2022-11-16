const { Comment } = require('../models');

const commentData = [
    {
        body: 'This isnt funny.  Was it meant as a joke?',
       user_id: 1,
        post_id: 2,
    },
    {
        body: 'WAIT WHAT?',
       user_id: 3,
        post_id: 1,
    },
    {
        body: 'Thats bizzare!',
       user_id: 2,
        post_id: 2,
    },
    {
        body: 'Is this true?',
       user_id: 3,
        post_id: 3,
    },
    {
        body: 'Thanks for sharing.',
       user_id: 3,
        post_id: 2,
    },

]
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
