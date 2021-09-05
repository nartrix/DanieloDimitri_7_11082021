const db = require('../middlewares/db');


exports.createComment = (req, res, next) => {
    db.posts.findOne({where: {id: req.body.postId}})
        .then(post => {
            if (!post) {
                return res.status(404).json({ error: 'Post introuvable !' })
            }
            db.comments.create({
                message: req.body.message,
                userId: res.locals.userId,
                postId: post.id
            })
                .then(comment => res.status(201).json({ comment }))
                .catch(error => res.status(400).json({ error }))
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ error });
        })         
}