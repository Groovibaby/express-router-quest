var express = require('express')
var router = express.Router({mergeParams: true});
const fakePosts = require('./../../data/posts');
const postComments = require('./postcomments');

// Get a list of posts
router.get('/', (req, res) => {
    res.json(fakePosts);
});

// Get a single post
router.get('/:postId', (req, res) => {
    // Find the post in the array that has the id given by req.params.id
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const postId = Number(req.params.postId);
    const foundPost = fakePosts.find((post) => post.id === postId);
    if (!foundPost) {
      return res.status(404).json({
        error: 'Post not found',
      });
    }
    return res.json(foundPost);
});

router.use('/:postId/comments', postComments);

module.exports = router