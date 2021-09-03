const db = require('../middlewares/db');
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