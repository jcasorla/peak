const express = require('express');
const router = express.Router();
const movies = require('./../controllers/movies');

router.get('/', movies.all)
    .get('/:id', movies.getOneById)
    .post('/', movies.create)
    .put('/:id', movies.update)
    .delete('/:id', movies.delete)
    .post('/:id/review', movies.createReview)

module.exports = router;
