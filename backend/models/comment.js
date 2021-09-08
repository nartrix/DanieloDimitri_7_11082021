module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("comments", {
        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            allowNull:     false,
            primaryKey:    true,
            autoIncrement: true,
          },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                msg: 'Le contenu du commentaire ne peut pas être vide',
                },
                notEmpty: {
                msg: 'Le contenu du commentaire ne peut pas être vide',
                }
            }
        }
    }, {
        sequelize,
        modelName: 'comments',
    });
    return Comment;
};