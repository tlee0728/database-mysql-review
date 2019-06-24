const Sequelize = require('sequelize');

const connection = new Sequelize('dbreview', 'root', 'FILL_ME_OUT', {
    host: 'localhost',
    dialect: 'mysql'
});

connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  module.exports = connection;