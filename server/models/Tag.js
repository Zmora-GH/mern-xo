module.exports = function(sequelize, Sequelize) {
    var Tag = sequelize.define('Tag', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.TEXT
        },
        count: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    });
    return Tag;
}
