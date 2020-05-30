// routes/comments.js
const express = require('express');
const router = express.Router();

const fakeComments = require('../data/comments');

// Get a list of comments
router.get('/', (req, res) => {
    res.json(fakeComments);
});

module.exports = router;