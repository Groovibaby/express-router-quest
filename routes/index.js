const express = require('express');
const posts = require('./posts');
const tags = require('./tags');
const comments = require('./comments');

const router = express.Router();

router.use('/posts', posts);
router.use('/comments', comments);
router.use('/tags', tags);
router.use('/tags/:tagId/posts', tags);

module.exports = router;