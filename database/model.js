const Sequelize = require('sequelize');
const connection = require('./index')



const Todo = connection.define(
  'Todo', 
  {
    name: { type: Sequelize.STRING, allowedNull: false }
  }, 
  { 
    timestamps: false 
  }
);


connection // allows us to sync with the mysql database 
  .sync() // creates table if it doesnt exist. 
  .then( () => { console.log('Synced with MYSQL database')})
  .catch( (err) => { console.error(err)});

  module.exports = Todo;