const express = require('express');
const router = express.Router({mergeParams: true});

const tags = require('../data/tags');
const posts = require('../data/posts');

// Get a list of tags
router.get('/', (req, res) => {
    const tagId = Number(req.params.tagId);
    if (tagId) {
        const foundPost = posts.filter((post) => post.tag_ids.includes(tagId));
        if (!foundPost) {
        return res.status(404).json({
            error: 'Comment not found',
        });
        }
        return res.json(foundPost);
    } else {
        res.json(tags);
    }
});

module.exports = router;