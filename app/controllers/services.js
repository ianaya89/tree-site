var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/services', router);
};

router.get(['/'], function (req, res, next) {
    res.render('services', {
      title: 'TREE Arboricultura | Servicios'
    });
});
