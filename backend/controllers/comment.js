const db = require('../middlewares/db');
const User = db.users;


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

exports.deleteComment = (req, res, next) => {
    if (req.body.Role.includes('ROLE_MODERATEUR')) {
        db.comments.destroy({ where: { id: req.params.id } })
            .then(() => res.status(200).json({ message: 'Post supprimé !' }))
            .catch(error => res.status(404).json({ error }))
    } else {
        return res.status(403).json({ error: 'Vous ne disposez pas de droits suffisants' })
    }
}