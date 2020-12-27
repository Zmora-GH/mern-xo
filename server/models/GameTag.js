module.exports = function(sequelize, Sequelize) {
    var GameTag = sequelize.define('GameTag', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
    }, {
        timestamps: false,
    });
    return GameTag;
}
