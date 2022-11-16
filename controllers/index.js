const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const userRoutes = require('./api/user-routes.js');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/api/users', userRoutes);

module.exports = router;
