const Todo = require('./model');

const data = [
  {
    name: 'andy'
  },
  {
    name: 'likes'
  },
  {
    name: 'sam'
  },
  {
    name: '<3'
  }
];

Todo // syncs model to database. 
  .sync({ force: false })
  .then( () => {
    Todo
      .bulkCreate(data) // runs through object and creates multiple times. bulkCreate always takes in an array of objects
      .then( () => {
        console.log('Add bulk data');
      })
      .catch( (err) => {
        console.error('could not add in bulk data!@#');
      });
  })
  .catch( (err) => {
    console.error('Could not sync');
  });
// add "seed": "node ./database/seed.js" in package.json


  