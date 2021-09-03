module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull:     false,
        primaryKey:    true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING(180),
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: 'L\'email ne peut pas être vide',
          }
        }
      },
      username: {
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: 'Le nom d\'utilisateur ne peut pas être vide',
          },
        }
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      }
    },{
      sequelize,
      modelName: 'users',
  });
  return User;
};