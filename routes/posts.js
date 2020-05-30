// routes/comments.js
const express = require('express');
const router = express.Router();

const fakePosts = require('../data/posts.json');
const postcomments = require('./postcomments');

// Get a list of posts
router.get('/', (req, res) => {
    res.json(fakePosts);
});

// Get a single post
router.get('/:postId', (req, res) => {
    const postId = Number(req.params.postId);
    const foundPost = fakePosts.find((post) => post.id === postId);
    if (!foundPost) {
      return res.status(404).json({
        error: 'Post not found',
      });
    }
    return res.json(foundPost);
});

router.use('/:postId/comments', postcomments);

module.exports = router;