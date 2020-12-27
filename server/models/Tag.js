module.exports = function(sequelize, Sequelize) {
    var Tag = sequelize.define('Tag', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.TEXT
        }
    }, {
        timestamps: false,
    });
    return Tag;
}
