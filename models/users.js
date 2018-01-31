const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'mysql'
});

const Users = sequelize.define('users', {
    username: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    }
})