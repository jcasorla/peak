const express = require('express');
const router = express.Router();
const catchallRoute = require('./catchall.routes');
const apiRouter = express.Router();
const movieRoutes = require('./movie.routes');
apiRouter.use('/movies', movieRoutes);
router.use('/api', apiRouter)
  .use(catchallRoute);
module.exports = router;
