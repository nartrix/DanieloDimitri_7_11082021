module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
        },
        async isUnique(email) {
          const user = await User.findOne({ where: { email: email } })
          if (user) {
            throw new Error('Cette adresse email existe déjà');
          }
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
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};