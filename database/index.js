const Sequelize = require('sequelize');

const connection = new Sequelize('dbreview', 'root', '167234589Tl', {
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