const {Sequelize} = require('sequelize');

//Set up Sequelize conneciton 
const sequelize = new Sequelize(
  "postgres://testDocker:enzo@localhost:5432/SM_DB",
  {});
  
  
  
// Test the connection
(async () => {
    try {
      await sequelize.authenticate();
      console.log('\nConnection established successfully for the Table Course \n ');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  })();
  
  module.exports = sequelize;