const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../config/database.js')

const Courses = sequelize.define('Courses',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    course: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    module: {
        type: DataTypes.STRING,
        allowNull:true
    }
},{
    tableName:'Courses',
    timestamps: true // Automatically adds createdAt and updatedAt fields
}

)

module.exports = Courses