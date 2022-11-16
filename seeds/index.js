

const sequelize = require('../config/connection');
const seedComments = require('./commentData');
const seedUsers = require('./userData');
const seedPosts = require('./postData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedComments();

  await seedUsers();

  await seedPosts();

  process.exit(0);
};

seedAll();
