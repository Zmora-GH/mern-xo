module.exports = function(sequelize, Sequelize) {
    var Game = sequelize.define('Game', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.TEXT
        },
    }, {
        timestamps: false,
    });
    return Game;
}
