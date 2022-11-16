// the associations are going be between post that eh use creates, the comments on the posts, and the post belongs to user AND the comment belongs to a user 

//seeds will contain users comments and posts

//
const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const { belongsTo } = require('./User');

User.hasMany(Post, {
    foreignKey: 'user_id',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',

})
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',

})

module.exports = { User, Comment, Post };