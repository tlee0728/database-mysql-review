const Todo = require('../database/model.js');

const controller = {
  get: (req, res) => {
    // grab data from our database
    // send data to the users/client/server
    // status code will be 200
    Todo
      .findAll({})
      .then( (data) => {
        res.status(200).send(data);
      })
    .catch((err) => {
      console.error('roll over!!')
      res.status(404).send('Error');
    });

  },

  post: (req, res) => {
    const { name } = req.body;
    Todo
      .create({name})
      .then( () => {
        res.status(201).send('YAY!');
      })
      .catch((err) => {
        console.error(err);
        res.status(404).send('Error');
      })
  },

  delete: (req, res) => {
    // req.params allows us to get the id
    // req.params is mainly for updating/deleting
    const { id } = req.params;
    Todo
      .destroy({ where: {id} })
      .then( () => {
        res.status(200).send(`Destroyed id ${id}`)
      })
      .catch((err) => {
        console.error(err);
        res.status(404).send('Error');
      });
  },

  update: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    Todo
      .update({ name }, { where: { id }})
      .then( () => {
        res.status(202).send('yayaay!@!!')
      })
      .catch((err) => {
        console.error(err);
        res.status(404).send('Error');
      });
  }

};

module.exports = controller;
