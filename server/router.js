const router = require('express').Router();
const controller = require('./controller');

// create the endpoint that we want
router
  .route('/name')
  .get(controller.get)
  .post(controller.post);

  // now have access by doing /api/name/.get/.post

router
  .route('/id/:id') // anything after the colon is a key in req.params (in this case, id)
  .delete(controller.delete)
  .put(controller.update);


module.exports = router;
