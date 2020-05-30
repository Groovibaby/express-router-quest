var express = require('express')
var router = express.Router({mergeParams: true});
const fakeComments = require('./../../data/comments');

// Get a list of comments
router.get('/', (req, res) => {
    const idPost = Number(req.params.postId);
    const foundComment = fakeComments.filter((comment) => comment.post_id === idPost);
    if (!foundComment) {
      return res.status(404).json({
        error: 'Comment not found',
      });
    }
    return res.json(foundComment);
});


module.exports = router