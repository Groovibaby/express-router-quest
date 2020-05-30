var express = require('express')
var router = express.Router()
const fakeComments = require('./../../data/comments.json');

// Get a list of comments
router.get('/', (req, res) => {
    res.json(fakeComments);
});


module.exports = router