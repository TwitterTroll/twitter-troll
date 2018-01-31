const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'mysql'
});

const Votes = sequelize.define('votes', {
    vote: {
        type: Sequelize.BOOLEAN,
    }
})