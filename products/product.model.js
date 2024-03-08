const {DataTypes} = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name: {type: DataTypes.STRING, allowNull: false},
        price: {type: DataTypes.DECIMAL(10, 2), allowNull: false},
        quantity: {type: DataTypes.INTEGER, allowNull: false},
        image: {type: DataTypes.STRING, allowNull: false}
    };

    const options = {
        defaultScope: {
            attributes: { exclude: ['passwordHash']}
        },
        scopes: {
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('Product', attributes, options);
}