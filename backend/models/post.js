const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("posts", {
        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            allowNull:     false,
            primaryKey:    true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                msg: 'Le contenu du post ne peut pas être vide',
                }
            }
        },
        image: {
            type: DataTypes.STRING,
        }
    }, {
        sequelize,
        modelName: 'Posts',
    });
    return Post;
};