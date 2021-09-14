const db = require('../middlewares/db');

exports.deleteUser = (req, res, next) => {
    db.users.destroy({ where: { id: res.locals.userId } })
        .then(() => res.status(200).json({ message: 'Utilisateur supprimé !' }))
        .catch(error => res.status(404).json({ error }))
}