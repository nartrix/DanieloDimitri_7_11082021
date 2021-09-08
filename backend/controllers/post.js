const db = require('../middlewares/db');
const fs = require('fs');
const User = db.users;

exports.getAllPosts = (req, res, next) => {
    db.posts.findAll({
        include: [ User ]
    })
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(error => res.status(500).json({ error }))
}

exports.createPost = (req, res, next) => {
    db.posts.create({
        content: req.body.content,
        userId: res.locals.userId,
        image: ( req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null )
    })
    .then(post => res.status(201).json({ post }))
    .catch(error => res.status(400).json({ error }))
}

exports.deletePost = (req, res, next) => {
    db.posts.findOne({ where: { id: req.params.id } })
        .then(post => {
            if (req.body.Role.includes('ROLE_MODERATEUR')) {
                if (post.image) {
                    const filename = post.image.split('/images/')[1];
                    fs.unlink(`images/${filename}`, (err) => {
                        if (err) throw err;
                    })
                }
                db.posts.destroy({ where: { id: req.params.id } })
                    .then(() => res.status(200).json({ message: 'Post supprimé !' }))
                    .catch(error => res.status(404).json({ error }))
            } else {
                return res.status(403).json({ error: 'Vous ne disposez pas de droits suffisants' })
            }
        })
        .catch(error => res.status(404).json({ error }))
}

exports.getMyPosts = (req, res, next) => {
    db.posts.findAll({
        where: { userId: req.params.id },
        include: [ User ]
    })
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(error => res.status(500).json({ error }))
}


exports.getAllComments = (req, res, next) => {
    db.comments.findAll({
        where: { postId: req.params.id },
        include: [ User]
    })
        .then(comments => res.status(200).json(comments))
        .catch(error => res.status(500).json({ error }))
}