module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "votre mot de passe",
    DB: "votre nom de db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
